import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripVertical,
  faDollarSign,
  faCartShopping,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const OverviewCard = ({
  title,
  value,
  percent,
  isIncrease,
  icon,
  bgColor,
  buttonColor,
}) => {
  return (
    <div className={`rounded-lg p-4 flex items-start justify-between w-1/3 ${bgColor}`}>
      <div className="space-y-3">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-gray-400">
          <FontAwesomeIcon
            icon={isIncrease ? faCaretUp : faCaretDown}
            className={`${isIncrease ? "text-green-400" : "text-red-400"} pt-1`}
          />
          <span className={`${isIncrease ? "text-green-400" : "text-red-400"}`}>
            {" "}
            {percent}
          </span>
          <span> periods of change</span>
        </p>
      </div>
      <button className={`border rounded-lg p-2 w-10 ${buttonColor}`}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
};

const Overview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://67e372552ae442db76d02b52.mockapi.io/overview"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const getIcon = (title) => {
    if (title === "Profit") return faDollarSign;
    if (title === "New customer") return faCircleUser;
    return faCartShopping;
  };

  const getColors = (index) => {
    return index === 0
      ? { bg: "bg-pink-100", border: "border-pink-500 text-pink-500" }
      : { bg: "bg-blue-100", border: "border-blue-500 text-blue-500" };
  };

  return (
    <div className="p-6">
      <p>
        <FontAwesomeIcon
          icon={faGripVertical}
          className="text-pink-500 mr-2 text-xl"
        />
        <span className="text-xl font-bold">Overview</span>
      </p>

      <div className="mt-4 flex items-center justify-between gap-4">
        {data.map((item, index) => {
          const { bg, border } = getColors(index);
          return (
            <OverviewCard
              key={item.id}
              title={item.title}
              value={item.total}
              percent={item.percent + "%"}
              isIncrease={true}
              icon={getIcon(item.title)}
              bgColor={bg}
              buttonColor={border}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Overview;