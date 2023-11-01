import React, { useRef } from "react";
import ApexCharts from "react-apexcharts";

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);

  const series = {
    monthDataSeries1: {
      prices: [25, 32, 28, 40, 45, 43, 48], // Sample prices
      dates: ["2023-01-01", "2023-01-02", "2023-01-03", "2023-01-04", "2023-01-05", "2023-01-06", "2023-01-07"] // Sample dates
    }
  };

  const options = {
    series: [
      {
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices
      }
    ],
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    title: {
      text: "",
      align: "left"
    },
    subtitle: {
      text: "",
      align: "left"
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      opposite: false
    },
    legend: {
      horizontalAlign: "left"
    }
  };

  const options2 = {
    series: [44, 55, 41, 17, 15],
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    options: {
      chart: {
        type: "donut"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
  };

  return (
    <div className="px-[15%] pb-[50px]">
      <div className="flex justify-end py-5">
        <button className="p-2 text-gray-500 border border-gray-300">LAST 30 DAYS</button>
      </div>
      <div className="grid grid-cols-5 gap-[2%]">
        <ItemCart></ItemCart>
        <ItemCart></ItemCart>
        <ItemCart></ItemCart>
        <ItemCart></ItemCart>
        <ItemCart></ItemCart>
      </div>
      <div className="grid grid-cols-2 mt-14 gap-[10%]">
        <div className="border border-gray-300">
          <div className="flex justify-between p-5 border-b border-gray-300">
            <p>Total Email Sent This Month</p>
            <svg
              width="4"
              height="18"
              viewBox="0 0 4 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M0.375001 2.09375C0.375001 1.77236 0.470306 1.45818 0.648863 1.19095C0.82742 0.92372 1.08121 0.715439 1.37814 0.592446C1.67507 0.469454 2.0018 0.437274 2.31702 0.499975C2.63224 0.562676 2.92179 0.717442 3.14905 0.944702C3.37631 1.17196 3.53108 1.46151 3.59378 1.77673C3.65648 2.09195 3.6243 2.41868 3.50131 2.71561C3.37831 3.01254 3.17003 3.26633 2.9028 3.44489C2.63557 3.62345 2.3214 3.71875 2 3.71875C1.56902 3.71875 1.1557 3.54755 0.850953 3.2428C0.546206 2.93805 0.375001 2.52473 0.375001 2.09375ZM2 7.375C1.67861 7.375 1.36443 7.47031 1.0972 7.64886C0.82997 7.82742 0.621689 8.08121 0.498696 8.37814C0.375704 8.67507 0.343524 9.0018 0.406225 9.31702C0.468926 9.63224 0.623692 9.92179 0.850953 10.149C1.07821 10.3763 1.36776 10.5311 1.68298 10.5938C1.9982 10.6565 2.32493 10.6243 2.62186 10.5013C2.91879 10.3783 3.17258 10.17 3.35114 9.9028C3.5297 9.63557 3.625 9.3214 3.625 9C3.625 8.56902 3.4538 8.1557 3.14905 7.85095C2.8443 7.54621 2.43098 7.375 2 7.375ZM2 14.2813C1.67861 14.2813 1.36443 14.3766 1.0972 14.5551C0.82997 14.7337 0.621689 14.9875 0.498696 15.2844C0.375704 15.5813 0.343524 15.9081 0.406225 16.2233C0.468926 16.5385 0.623692 16.828 0.850953 17.0553C1.07821 17.2826 1.36776 17.4373 1.68298 17.5C1.9982 17.5627 2.32493 17.5305 2.62186 17.4076C2.91879 17.2846 3.17258 17.0763 3.35114 16.8091C3.5297 16.5418 3.625 16.2276 3.625 15.9063C3.625 15.4753 3.4538 15.0619 3.14905 14.7572C2.8443 14.4525 2.43098 14.2813 2 14.2813Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex items-center justify-around pb-5">
            <div className="flex flex-col items-center justify-center">
              <span className="mt-6 text-3xl font-semibold">10.5K</span>
              <p className="text-gray-500 whitespace-nowrap">Total emails Sent</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="mt-6 text-3xl font-semibold">10.5K</span>
              <p className="text-gray-500 whitespace-nowrap">Total emails Sent</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="mt-6 text-3xl font-semibold">10.5K</span>
              <p className="text-gray-500 whitespace-nowrap">Total emails Sent</p>
            </div>
          </div>

          <div className="">
            <div className="">
              <div id="chart" ref={chartRef}>
                <ApexCharts options={options} series={options.series} type="area" height={350} />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300">
          <div className="flex justify-between p-5 border-b border-gray-300">
            <p>Top Five Email Senders</p>
            <svg
              width="4"
              height="18"
              viewBox="0 0 4 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M0.375001 2.09375C0.375001 1.77236 0.470306 1.45818 0.648863 1.19095C0.82742 0.92372 1.08121 0.715439 1.37814 0.592446C1.67507 0.469454 2.0018 0.437274 2.31702 0.499975C2.63224 0.562676 2.92179 0.717442 3.14905 0.944702C3.37631 1.17196 3.53108 1.46151 3.59378 1.77673C3.65648 2.09195 3.6243 2.41868 3.50131 2.71561C3.37831 3.01254 3.17003 3.26633 2.9028 3.44489C2.63557 3.62345 2.3214 3.71875 2 3.71875C1.56902 3.71875 1.1557 3.54755 0.850953 3.2428C0.546206 2.93805 0.375001 2.52473 0.375001 2.09375ZM2 7.375C1.67861 7.375 1.36443 7.47031 1.0972 7.64886C0.82997 7.82742 0.621689 8.08121 0.498696 8.37814C0.375704 8.67507 0.343524 9.0018 0.406225 9.31702C0.468926 9.63224 0.623692 9.92179 0.850953 10.149C1.07821 10.3763 1.36776 10.5311 1.68298 10.5938C1.9982 10.6565 2.32493 10.6243 2.62186 10.5013C2.91879 10.3783 3.17258 10.17 3.35114 9.9028C3.5297 9.63557 3.625 9.3214 3.625 9C3.625 8.56902 3.4538 8.1557 3.14905 7.85095C2.8443 7.54621 2.43098 7.375 2 7.375ZM2 14.2813C1.67861 14.2813 1.36443 14.3766 1.0972 14.5551C0.82997 14.7337 0.621689 14.9875 0.498696 15.2844C0.375704 15.5813 0.343524 15.9081 0.406225 16.2233C0.468926 16.5385 0.623692 16.828 0.850953 17.0553C1.07821 17.2826 1.36776 17.4373 1.68298 17.5C1.9982 17.5627 2.32493 17.5305 2.62186 17.4076C2.91879 17.2846 3.17258 17.0763 3.35114 16.8091C3.5297 16.5418 3.625 16.2276 3.625 15.9063C3.625 15.4753 3.4538 15.0619 3.14905 14.7572C2.8443 14.4525 2.43098 14.2813 2 14.2813Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="mt-14">
            <div className="">
              <div id="chart2" ref={chartRef2}>
                <ApexCharts options={options2} series={options2.series} type="donut" height={350} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemCart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-0 border border-gray-300 aspect-square">
      <p className="flex items-center justify-center p-3 bg-blue-100 rounded-full aspect-square">
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.33342 17.6667C1.73758 17.6667 1.22733 17.4544 0.802666 17.0297C0.378 16.605 0.166028 16.0952 0.16675 15.5V2.50004C0.16675 1.90421 0.379083 1.39396 0.80375 0.969292C1.22842 0.544626 1.73831 0.332654 2.33342 0.333376H19.6668C20.2626 0.333376 20.7728 0.545709 21.1975 0.970376C21.6222 1.39504 21.8341 1.90493 21.8334 2.50004V15.5C21.8334 16.0959 21.6211 16.6061 21.1964 17.0308C20.7718 17.4555 20.2619 17.6674 19.6668 17.6667H2.33342ZM11.0001 10.0834L2.33342 4.66671V15.5H19.6668V4.66671L11.0001 10.0834ZM11.0001 7.91671L19.6668 2.50004H2.33342L11.0001 7.91671ZM2.33342 4.66671V2.50004V15.5V4.66671Z"
            fill="black"
          />
        </svg>
      </p>
      <span className="mt-6 text-3xl font-semibold">10.5K</span>
      <p className="text-gray-500 whitespace-nowrap">Total emails Sent</p>
    </div>
  );
};

export default Dashboard;
