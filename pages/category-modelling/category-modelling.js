Page({ 
    goToShow: function (e) {
        console.log(e)
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
        url: `/pages/show-page/show-page?id=${id}`,
        })
    },

    filterAnimal: function (e) {
        // console.log(e.mark.animal)
        const animal = e.mark.animal
        // console.log(animal)
        const pets = this.data.pets
        if (animal===this.data.animalMark) {
           this.setData({ isFilter:false }) 
           return
        }
        let animalList 
        if (animal==="dog"){ 
            animalList = pets.filter((pet)=> pet.pet_type === "dog") 
        } else if (animal==="cat") {
            animalList = pets.filter((pet)=> pet.pet_type === "cat")
        } else {
            animalList = pets.filter((pet)=> pet.pet_type === "others")
        }
        this.setData({ animalList, isFilter:true, animalMark:animal })
    },

    onShow() {
        const page = this;
        // let images = getApp().globalData.modelling_services
        // page.setData({ images: images })
        wx.request({
          url: `${getApp().globalData.baseUrl}/pets`,
          method: 'GET',
          success(res) {
              console.log(res.data)
              page.setData({pets: res.data.pets})
           }
        })
      },
})

  