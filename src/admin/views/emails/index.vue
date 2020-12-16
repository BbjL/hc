<template>
  <div class="email">
    <div class="email-content">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        stripe
        fit
        border
        highlight-current-row
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>

        <el-table-column type="index" label="序号" align="center" width="50">
        </el-table-column>

        <el-table-column
          prop="emailName"
          align="center"
          label="姓名"
          width="120"
        >
        </el-table-column>

        <el-table-column prop="emailContent" label="留言内容">
          <template slot-scope="scope">
            <p
              class="ellipsis"
              style="cursor: pointer; color: #409eff"
              @click="readMore(scope.$index)"
            >
              {{ tableData[scope.$index].emailContent }}
            </p>
          </template>
        </el-table-column>

        <el-table-column prop="emailAccount" width="300" label="邮箱地址">
        </el-table-column>

        <el-table-column label="日期" align="center" sortable width="120">
          <template slot-scope="scope">{{ scope.row.createTime }}</template>
        </el-table-column>

        <el-table-column label="操作" align="center" width="120">
          <template slot-scope="scope">
            <el-button
              @click="deleteItems(scope.row.id)"
              type="danger"
              size="mini"
              icon="el-icon-delete"
              round
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        small
        background
        hide-on-single-page
        layout="prev, pager, next"
        @current-change="pageChange"
        :page-count="totalPages"
      >
      </el-pagination>
      <div style="margin-top: 20px">
        <el-button
          @click="deleteItems(multipleSelection)"
          type="danger"
          size="mini"
          icon="el-icon-delete"
          >批量删除</el-button
        >
      </div>
    </div>
    <!--dialog-->
    <el-dialog title="留言内容" :visible.sync="dialogFormVisible">
      <div class="dialog_article" v-html="dialogContent"></div>
      <div slot="footer" class="dialog-footer"></div>
    </el-dialog>
  </div>
</template>

<script>
import { reqEmailsAll, deleteEmail } from "@admin/api";

export default {
  name: "Email",
  data() {
    return {
      dialogFormVisible: false, //对话框
      dialogContent: "", //模态框内容
      contentIndex: "", //模态框所需内容索引
      totalPages: 100, //总页数
      tableData: [],
      multipleSelection: "",
    };
  },
  mounted() {
    this.init(15);
  },
  methods: {

    //初始化
    init(page) {
      reqEmailsAll({ pageNum: 1, pageSize: page })
        .then((res) => {
          console.log(res);
          if (res.data.status == 200) {
            this.tableData  = res.data.emails;
            this.totalPages = res.data.totalPages;
          }
        })
        .catch(() => {
          this.$notify({
            type: "error",
            message: "服务器错误，获取数据失败！",
          });
        });
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    /*删除选中项*/
    handleSelectionChange(val) {
      this.multipleSelection = "";
      if (val.length != 0) {
        val.map((item, index, arr) => {
          index != arr.length - 1
            ? (this.multipleSelection += item.id + ",")
            : (this.multipleSelection += item.id);
        });
      }
      console.log(this.multipleSelection);
    },

    //模态框查看留言内容
    readMore(index) {
      this.contentIndex = index;
      this.dialogFormVisible = true;
      this.dialogContent = this.tableData[index].emailContent;
    },

    //页码改变
    pageChange() {
      reqEmailsAll({ pageNum: 1, pageSize: 15 })
        .then((res) => {
          if (res.data.status == 200) {
            const allData = res.data.emails;
            this.tableData = allData;
          }
        })
        .catch(() => {
          this.$notify({
            type: "error",
            message: "服务器错误，获取数据失败！",
          });
        });
    },

    //删除消息
    deleteItems(ids) {
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning",
        cancelButtonClass: "取消",
        confirmButtonClass: "确定",
      }).then(() => {
        deleteEmail(ids)
          .then((res) => {
            if (res.data.status == 200) {
              this.$notify({ type: "success", message: "删除成功！" });
              this.init();
            } else {
              this.$notify({ type: "error", message: "系统出错！" });
            }
          })
          .catch(() => {
            this.$notify({
              type: "error",
              message: "系统出错！",
            });
          });
      });
    },
  },
};
</script>

<style lang="scss"  scoped>
.email-content {
  padding: 15px;
  background-color: #fff;
}
</style>
