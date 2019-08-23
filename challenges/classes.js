// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker2 {
    Constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.volume = 0;
        this.surfaceArea = 0;
    }

    getVolume() {
        this.volume = this.length * this.width * this.height;
        return `The volume of this cuboid is ${this.volume} cubic meters`;
    }

    getSurfaceArea() {
        this.surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return `The surface area of this cuboid is ${this.surfaceArea} squared meter`;
    }

  }  
  
  const cuboid3 = new CuboidMaker(100,1200,1000);
  console.log(cuboid3);
  console.log(cuboid3.getVolume());    
  console.log(cuboid3.getSurfaceArea()); 
 
  
  const cuboid4 = new CuboidMaker(4, 5, 5);
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
   console.log(cuboid4.getVolume()); // 100
   console.log(cuboid4.getSurfaceArea()); // 130
  
  
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create 
//those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.