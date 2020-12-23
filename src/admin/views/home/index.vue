<template>
  <div class="overview-container">
    <el-row :gutter="40">
      <el-col :md="24" :lg="8" :xl="8">
        <div class="card-box">
          <h4 class="widget-title">访问量</h4>
          <div class="widget-chart-1">
            <div class="widget-detail-1">
              <h5>200</h5>
              <p>今日访问</p>
            </div>
            <div class="widget-chart-box-1">
              <v-chart :options="pie" />
            </div>
          </div>
        </div>
      </el-col>
      <!-- 最近项目 -->
      <el-col :md="24" :lg="15" :xl="15">
        <div class="card-box">
          <h4 class="widget-title">最新项目</h4>
          <div class="widget-table-project">
            <el-table
              ref="singleTable"
              :data="tableData"
              highlight-current-row
              style="width: 100%"
            >
              <el-table-column type="index" width="50" label="#">
              </el-table-column>
              <el-table-column property="proName" label="项目名称" >
              </el-table-column>
              <el-table-column property="proDate" label="开始时间" >
              </el-table-column>
              <el-table-column property="endDate" label="结束时间">
              </el-table-column>
              <el-table-column property="proGrgoupZh" label="组别">
              </el-table-column>
              <el-table-column property="createBy" label="责任人">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <!-- 最近奖项 -->
      <el-col :md="24" :lg="6" :xl="6">
        <div class="card-box">
          <h4 class="widget-title">最近奖项</h4>
          <ul class="widget-email">
            <li class="widget-email-item" v-for="(item, index) in awards" :key="index">
              <p class="email-date">{{item.awardDate}}</p>
              <p class="email-sender">{{item.awardGroup}}</p>
              <p class="email-content">{{item.awardName}}</p>
            </li>
          </ul>
        </div>
      </el-col>

      <!-- 上传一览 -->
      <el-col :md="24" :lg="6" :xl="8">
        <div class="card-box">
          <h4 class="widget-title">上传一览</h4>
          <div class="widget-chart-bar">
            <v-chart :options="bar" />
          </div>
        </div>
      </el-col>
      <!-- 收件箱 -->
      <el-col :md="24" :lg="9" :xl="9">
        <div class="card-box">
          <h4 class="widget-title">收件箱</h4>
          <ul class="widget-email">
            <li class="widget-email-item" v-for="(item, index) in emails" :key="index">
              <p class="email-date">{{item.createTime}}</p>
              <p class="email-sender">{{item.emailName}}</p>
              <p class="email-content">{{item.emailContent}}</p>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import { reqProjectList, reqEmailsAll, reqAwardsAll } from "@admin/api";

export default {
  name: "home",
  components: {
    "v-chart": ECharts,
  },
  data() {
    return {
      emails: [],
      tableData: [],
      awards:[],
      pie: {
        tooltip: {
          trigger: "item",
          formatter: "{value} %",
        },
        series: [
          {
            name: "访问量",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
              formatter: "{b} \n {c}  \n {d}%", //多值的嵌套
            },
            data: [
              { value: 1000, name: "总访问量" },
              { value: 2000, name: "今日访问量" },
            ],
          },
        ],
      },
      bar: {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["团队风采", "团队氛围", "科研视频", "团队项目"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [150, 250, 200, 334],
          },
        ],
      },
    };
  },
  beforeMount() {
    reqProjectList({ pageNum: 1, pageSize: 7 })
      .then((res) => {
        this.tableData = res.data.projects;
      })
      .catch(() => {
        this.$notify({
          type: "error",
          message: "服务器错误，无法获取数据！",
        });
      });

    reqEmailsAll({ pageNum: 1, pageSize: 5 })
      .then((res) => {
        this.emails = res.data.emails;
      })
      .catch(() => {
        this.$notify({
          type: "error",
          message: "服务器错误，无法获取数据！",
        });
      });

    reqAwardsAll({ pageNum: 1, pageSize: 7 })
      .then((res) => {
        this.awards = res.data.awards;
      })
      .catch(() => {
        this.$notify({
          type: "error",
          message: "服务器错误，无法获取数据！",
        });
      });

    
  },
};
</script>

<style>
/**
 * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
 * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
 */
.echarts {
  width: 100%;
  height: 100%;
}
</style>

<style lang='scss' scoped>
$content-color: #505458;
$title-color: #666666;
$title-size: 20px;

.overview-container {
  margin-left: -20px;
  margin-right: -20px;
  min-height: 100vh;
  background: #efefef;
  .card-box {
    margin-top: 20px;
    margin-left: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    .widget-chart-box-1 {
      width: 70%;
      height: 344px;
    }
    .widget-title {
      font-size: $title-size;
      color: $title-color;
      padding-top: 20px;
      margin-bottom: 20px;
    }
    .widget-detail-1 {
      float: right;
      margin-top: 164px;
      margin-right: 35px;
      h5 {
        font-size: 32px;
        color: $title-color;
        margin-bottom: 30px;
      }
      p {
        color: $content-color;
      }
    }
  }
}

.widget-email {
  background: #fff;
  font-size: 14px;
  color: $content-color;
  .widget-email-item {
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .email-sender {
    font-size: 20px;
    color: $title-color;
    padding-bottom: 10px;
  }
  .email-date {
    float: right;
  }
}

.widget-chart-bar {
  height: 335px;
  width: 100%;
}
</style>
