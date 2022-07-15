/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable object-curly-newline */
// import cx from 'classnames'

import NumberFormat from 'react-number-format';

interface TableRowProps {
  title: string;
  categori: string;
  item: string;
  price: number;
  status: string;
  image: string;
}

export default function TableRow(props: TableRowProps) {
  const { title, categori, item, price, status, image } = props;
  //   const statusClass = cx({
  //     'float-start icon-status': true,
  //     pending: status === 'Pending',
  //     success: status === 'Success',
  //     failed: status === 'Failed',
  //   })
  return (
    <tr className="align-middle">
      <th scope="row">
        <img className="float-start me-3 mb-lg-0 mb-3" src={image} width="80" height="60" alt="" />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{categori}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <NumberFormat
            displayType="text"
            value={price}
            prefix="Rp. "
            decimalSeparator=","
            thousandSeparator="."
          />
        </p>
      </td>
      <td>
        <div>
          {/* <span className={statusClass}></span> */}
          <span className={[status.toLowerCase(), 'float-start icon-status'].join(' ')}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
        </div>
      </td>
    </tr>
  );
}
