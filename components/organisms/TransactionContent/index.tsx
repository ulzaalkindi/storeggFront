import React, { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { toast } from 'react-toastify';
import { HistoryTransactionTypes } from '../../../services/data-types';
import { getMemberTransactions } from '../../../services/member';
import ButtonTab from './ButtonTab';
import TableRow from './TableRow';

export default function TransactionContent() {
  const [total, setTotal] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const [tab, setTab] = useState('all');
  const IMG = process.env.NEXT_PUBLIC_IMG;
  const getMemberTransactionAPI = useCallback(
    async (value: string) => {
      const response = await getMemberTransactions(value);
      if (response.error) {
        toast.error(response.message);
      } else {
        setTransaction(response.data.data);
        setTotal(response.data.total);
      }
    },
    [getMemberTransactions],
  );
  useEffect(() => {
    getMemberTransactionAPI('all');
  }, []);
  const onTabClick = (value: string) => {
    setTab(value);
    getMemberTransactionAPI(value);
  };
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat
              displayType="text"
              value={total}
              prefix="Rp. "
              decimalSeparator=","
              thousandSeparator="."
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab onClick={() => onTabClick('all')} title="All Trx" active={tab === 'all'} />
              <ButtonTab
                onClick={() => onTabClick('success')}
                title="Success"
                active={tab === 'success'}
              />
              <ButtonTab
                onClick={() => onTabClick('pending')}
                title="Pending"
                active={tab === 'pending'}
              />
              <ButtonTab
                onClick={() => onTabClick('failed')}
                title="Failed"
                active={tab === 'failed'}
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {transaction.map((item: HistoryTransactionTypes) => (
                  <TableRow
                    key={item._id}
                    title={item.historyVoucherTopup.gameName}
                    image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                    category={item.historyVoucherTopup.category}
                    item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                    price={item.value}
                    status={item.status}
                    id={item._id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
