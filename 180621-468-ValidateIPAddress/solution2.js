/**
 * @param {string} IP
 * @return {string}
 */
 (function() {
 function validIPAddress(IP) {
    var isV4 = false, isV6 = false, curSeg = '', segCount = 0;
    for(var i = 0; i < IP.length; i++) {
      if(IP[i] === '.' || (IP.indexOf('.') === -1 && isV4)) {   //test for v4
        isV4 = true
        curSeg = ''
        if(IP.indexOf('.') === -1) {
          curSeg = IP
        }else {

          for(var j = 0; j <= i; j ++) {
            if(IP[j] === '.') {
              IP = IP.substr(-(IP.length-1))
              break
            }else {
              curSeg += IP[j]
              IP = IP.substr(-(IP.length-1))
            }
          }
        }
        if(curSeg[0] === '0') {debugger;return 'Neither'}
        curSeg = parseInt(curSeg)
        if(curSeg >= 255 || curSeg < 0) {debugger;return 'Neither'}
        segCount++
        // debugger
      }else if(IP[i] === ':' || (IP.indexOf(':') === -1 && isV6)){
        isV6 = true
        curSeg = ''
        if(IP.indexOf(':') === -1) {
          debugger
          curSeg = IP
        }else {
          for(var j = 0; j <= i; j ++) {
            if(IP[j] === ':') {
              IP = IP.substr(-(IP.length-1))
              break
            }else {
              curSeg += IP[j]
              IP = IP.substr(-(IP.length-1))
            }
          }
        }
        if(curSeg.length === 0 || curSeg.length > 4) {debugger;return 'Neither'}
        for(var k = 0; k < curSeg.length; k++) {
          if( (curSeg[k] >= '0' && curSeg[k] <= '9') || (curSeg[k] >= 'a' && curSeg[k] <= 'f') || (curSeg[k] >= 'A' && curSeg[k] <= 'F'))
          {

          }else {
            debugger
            return 'Neither'
          }
        }
        segCount++
        // debugger
      }
    }
    if(!isV4 && !isV6) return 'Neither'
    if(isV4 && segCount !== 4) return 'Neither'
    if(isV6 && segCount !== 8) return 'Neither'
    return isV4 ? 'IPv4' : 'IPv6'


};
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))

}())


//第二版答案
//41 / 79 test cases passed.
//Status: Wrong Answer
