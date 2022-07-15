import React, { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { toast } from 'react-toastify';
import { getMemberTransactions } from '../../../services/member';
import ButtonTab from './ButtonTab';
import TableRow from './TableRow';

export default function TransactionContent() {
  const [total, setTotal] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const IMG = process.env.NEXT_PUBLIC_IMG;
  const getMemberTransactionAPI = useCallback(async () => {
    const response = await getMemberTransactions();
    if (response.error) {
      toast.error(response.message);
    } else {
      console.log('data: ', response.data);
      setTransaction(response.data.data);
      setTotal(response.data.total);
      console.log('databroo: ', response.data.data);
      console.log('totalbroo: ', response.data.total);
    }
  }, [getMemberTransactions]);
  useEffect(() => {
    getMemberTransactionAPI();
  }, []);
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
              <ButtonTab title="All Trx" active />
              <ButtonTab title="Success" active={false} />
              <ButtonTab title="Pending" active={false} />
              <ButtonTab title="Failed" active={false} />
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
                {transaction.map((item) => (
                  <TableRow
                    title={item.historyVoucherTopup.gameName}
                    image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                    category={item.historyVoucherTopup.category}
                    item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                    price={290000}
                    status="Pending"
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
