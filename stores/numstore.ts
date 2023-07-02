import { defineStore } from "pinia";
import { IndexKind } from "typescript";
export const useNumStore = defineStore('numStore', {
  state(){
    return {
      nums: [ // Сортировку изменить нельзя
        {
          id: 2,
          count: 0
        },
        {
          id: 1,
          count: 0
        },
        {
          id: 3,
          count: 0
        },
      ]
    }
  },
  actions: {
    numPlus(da: IndexKind){
      if (da != null) {
        this.nums[da - 1].count ++
      }
    }
  }
})