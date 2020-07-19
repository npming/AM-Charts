import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ApiCall } from "../ApiCall";
import { Spinner } from "reactstrap";

am4core.useTheme(am4themes_animated);

function PieChart() {
  let data = ApiCall();

  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.PieChart3D);

    chart.paddingRight = 20;

    let datas = [];
    data != null
      ? data.regionData.map((analysis) =>
          datas.push({
            name: analysis.region,
            value: analysis.totalCases,
            recovery: analysis.recovered,
          })
        )
      : datas.push(null);

    chart.data = datas;

    let pieSeries = chart.series.push(new am4charts.PieSeries3D());

    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "name";
    chart.innerRadius = am4core.percent(40);
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = "color";
    chart.legend = new am4charts.Legend();
    return () => {
      chart.dispose();
    };
  }, [data != null]);

  return (
    <div className="chart-body">
      {data != null ? (
        <div id="chartdiv" style={{ width: "100%", height: "800px" }}></div>
      ) : (
        <Spinner color="primary" style={{ width: "3rem", height: "3rem" }} />
      )}
    </div>
  );
}

export default PieChart;
