import React from "react";
import { IProps } from "../../types";
import ChartContainer from "./ChartContainer";
import { Bar } from "react-chartjs-2";

const MostStarred = ({ sortedStars }: IProps) => {
  const name = sortedStars?.map((item) => item.name.slice(0, 15));
  const stars = sortedStars?.map((item) => item.stargazers_count);
  const slicedStars = stars?.slice(0, 5);

  const data = {
    labels: name?.slice(0, 5),
    datasets: [
      {
        label: "Stars",
        data: slicedStars,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
      },
    ],
  };
  return (
    <ChartContainer title="Most Starred">
      <Bar
        data={data}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          aspectRatio: 1,
        }}
      />
    </ChartContainer>
  );
};

export default MostStarred;
