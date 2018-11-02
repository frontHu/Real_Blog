import React from 'react'
import Header from './../component/Header/Header'
import Footer from './../component/Footer/Footer'

export const LayoutWrapper = function(currentPath) {
  return function(Comp) {
    return  (
      class Hoc extends React.Component {
        render() {
          let pathArray = ['/', '/about']
          let show = currentPath.includes(pathArray) ? true : false
          return (
            <div>
              {show ? null : <Header />}
              <Comp />
              {show ? null : <Footer />}
            </div>
          )  
        }
      }
    )
  }
}