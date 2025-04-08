import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableData = ({ data }) => {
  DataTable.use(DT);

  const columns = [
    { data: "name" },
    { data: "companyName" },
    { data: "orderValue" },
    { data: "orderDate" },
    { data: "status" },
    { data: "id" },
  ];

  const randomStatus = () => (Math.random() > 0.5 ? "New" : "In-Progress");

  return (
    <DataTable
      data={data}
      columns={columns}
      slots={{
        0: (name, row) => (
          <div className="flex items-center gap-2 py-[16px]">
            <img
              src={row.avatar}
              className="w-[36px] h-[36px] rounded-full object-cover"
              alt=""
            />
            <p className="text-md font-semibold">{name}</p>
          </div>
        ),
        1: (companyName) => <p className="text-md">{companyName}</p>,
        2: (orderValue) => <p className="text-md">{orderValue}</p>,
        3: (orderDate) => <p className="text-md">{orderDate}</p>,
        4: (status) => {
          const displayStatus = status
            ? "Completed"
            : randomStatus();

          const statusStyle = {
            New: "bg-[#f1f8fd] text-[#99cbf2] w-[50px]",
            "In-Progress": "bg-[#fef9ee] text-[#98690c] w-[100px]",
            Completed: "bg-[#eefdf3] text-[#1e833f] w-[100px]",
          };

          return (
            <div className="flex items-center justify-center">
              <p
                className={`${statusStyle[displayStatus]} text-center block px-2 py-1 rounded-full`}
              >
                {displayStatus}
              </p>
            </div>
          );
        },
        5: (_, row) => (
          <div className="flex items-center justify-center">
            <button
              className="text-gray-400 px-2 cursor-pointer aspect-square rounded-sm border-2 border-gray-300"
              onClick={() => console.log(row)}
            >
              <FontAwesomeIcon icon={faPen} />
            </button>
          </div>
        ),
      }}
      options={{
        paging: true,
        lengthChange: false,
        searching: false,
        ordering: true,
        pageLength: 6,
        dom: '<"top"lf>rt<"bottom d-flex align-items-center justify-content-between"ip><"clear">',
        language: {
          info: "_TOTAL_ results",
        },
        pagingType: "simple_numbers",
        renderer: {
          pageButton: "bootstrap",
        },
      }}
    >
      <thead>
        <tr>
          <th className="text-left font-semibold text-[#565E6CFF] text-lg uppercase">
            Customer name
          </th>
          <th className="text-left font-semibold text-[#565E6CFF] text-lg uppercase">
            Company Name
          </th>
          <th className="text-left font-semibold text-[#565E6CFF] text-lg uppercase">
            Order value
          </th>
          <th className="text-left font-semibold text-[#565E6CFF] text-lg uppercase">
            Order date
          </th>
          <th className="text-center font-semibold text-[#565E6CFF] text-lg uppercase">
            Status
          </th>
          <th className="text-center font-semibold text-[#565E6CFF] text-lg uppercase">
            Edit
          </th>
        </tr>
      </thead>
    </DataTable>
  );
};

export default TableData;
