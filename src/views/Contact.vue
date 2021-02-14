<template>
  <div>
    <table>
        <caption></caption>
        <thead>
            <th>AA</th>
            <th>BB</th>
            <th>CC</th>
        </thead>
        <tbody>
          <template v-for="(list, i) in items">
            <template v-if="list.id != 'C'">
            <tr :key="i">
              <td :key="j" v-for="(item, j) in list">{{item}}</td>
            </tr>
            </template>
            
            <template v-if="list.id === 'C'">
              <template v-for="(subitem, i) in infoMerge">
            <tr :key="i">
                <template v-if="i === 0">
              <td :rowspan="2">{{list.id}}</td>
                </template>
              <td :key="k" v-for="(item, k) in subitem">{{item}}</td>
            </tr>
              </template>
            </template>
          </template>
        </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
            {id : "A", a : 1, b : 1},
            {id : "B", a : 2, b : 2},
            {id : "C", a : [3,3], b : [4,4]},
            {id : "D", a : 5, b : 5},
            {id : "C", a : [3,3], b : [4,4]},
        ]
      }
    },
    computed : {
        infoMerge : (data) => {
          var arr = data.items.filter(i => i.id === 'C');
          var tempArr = [];

          tempArr.push(arr[0].a);
          tempArr.push(arr[0].b);

          return tempArr;
        }
    },
    methods : {
        getRowSpan: (arr) => {
           console.log(arr);
        }
    }
  }
</script>