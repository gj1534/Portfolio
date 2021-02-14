<template>
    <div class="container pt mt md">
      <div class="col-lg-8 mx-auto text-center md">
        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Salary</h2>
        <p class="color-basic fonsiz-xl fonwei-kr-xs letsp-xs ws-sm mt-4">
            합리적인 가격에 저를 판매합니다. 기분좋은 만남은 언제나 환영입니다.<br><br>
            <span class="fonwei-en-xl letsp-md">"제가 가진 가치를 기업에 환원합니다."</span>   
        </p>
      </div>
      <div class="card shadow">
          <div class="card-body">
              <b-table-simple responsive>
                <colgroup>
                  <col>
                  <col>
                  <col>
                  <col>
                  <col>
                </colgroup>
                <b-thead head-variant="dark">
                  <b-tr>
                    <b-th class="text-center" colspan="2">구분</b-th>
                    <b-th class="text-center">BASIC DEVELOPER</b-th>
                    <b-th class="text-center">PERPOMENCE DEVELOPER</b-th>
                    <b-th class="text-center">BEAST DEVELOPER</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-th class="text-center" colspan="2">근무시간</b-th>
                    <b-td class="text-center">1일 / 8시간 <b-icon icon="check-2" variant="success"/></b-td>
                    <b-td class="text-center" variant="success">1일 / 8시간 <b-icon icon="check-2" variant="success"/></b-td>
                    <b-td class="text-center">법이 뭔가요? <b-icon icon="check-2" variant="success"/></b-td>
                  </b-tr>
                  <b-tr>
                    <b-th class="text-center" colspan="2">근무요일</b-th>
                    <b-td class="text-center">주말, 공휴일 <b-icon icon="x" variant="danger"/></b-td>
                    <b-td class="text-center" variant="success">주말, 공휴일 <b-icon icon="x" variant="danger"/></b-td>
                    <b-td class="text-center">주일은 일하는 날 <b-icon icon="check-2" variant="success"/></b-td>
                  </b-tr>
                  <b-tr>
                    <b-th class="text-center" colspan="2">야근여부</b-th>
                    <b-td class="text-center">야근, 철야 <b-icon icon="x" variant="danger"/></b-td>
                    <b-td class="text-center" variant="success">필요한 야근 지원 <b-icon icon="check-2" variant="success"/></b-td>
                    <b-td class="text-center">제 집은 회사입니다. <b-icon icon="check-2" variant="success"/></b-td>
                  </b-tr>
                  <b-tr>
                    <b-th class="text-center align-middle" rowspan="2">개발유형</b-th>
                    <b-th class="text-center">Front-End</b-th>
                    <b-td class="text-center">정상적인 Front개발 <b-icon icon="check-2" variant="success"/></b-td>
                    <b-td class="text-center" variant="success">멋진 Front개발 <b-icon icon="check-2" variant="success"/></b-td>
                    <b-td class="text-center">Front 공장장 <b-icon icon="check-2" variant="success"/></b-td>
                  </b-tr>
                  <b-tr>
                    <b-th class="text-center">Back-End</b-th>
                    <b-td class="text-center">정상적인 Back개발 <b-icon icon="check-2" variant="success"/></b-td>
                    <b-td class="text-center" variant="success">아름다운 Back개발 <b-icon icon="check-2" variant="success"/></b-td>
                    <b-td class="text-center">행복한 Back개발 <b-icon icon="check-2" variant="success"/></b-td>
                  </b-tr>
                  <b-tr>
                    <b-th class="text-center" colspan="2">기획여부</b-th>
                    <b-td class="text-center">개발자가 기획이요? <b-icon icon="x" variant="danger"/></b-td>
                    <b-td class="text-center" variant="success">다소기획참여 <b-icon icon="check-2" variant="success"/></b-td>
                    <b-td class="text-center">전 뭐든지 할 수 있습니다. <b-icon icon="check-2" variant="success"/></b-td>
                  </b-tr>
                </b-tbody>
                <b-tfoot>
                  <b-tr>
                    <b-td colspan="3" variant="secondary" class="text-right"></b-td>
                    <b-td variant="danger" class="text-center"><b-icon icon="bookmark-star-fill" variant="danger"/> BEST <b-icon icon="bookmark-star-fill" variant="danger"/></b-td>
                    <b-td variant="secondary" class="text-right"></b-td>
                  </b-tr>
                </b-tfoot>
              </b-table-simple>
          <div class="table-desc fonsiz-xs fonwei-kr-sm letsp-sm text-center color-basic-opac">항상 최선을 다하겠습니다.</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
   
}
</script>