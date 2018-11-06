export default bindMethods = (methods, obj) => {
  methods.forEach(f => {
    if(typeof f === 'function') {
      obj[f] = obj[f].bind(this)
    }
  })
}