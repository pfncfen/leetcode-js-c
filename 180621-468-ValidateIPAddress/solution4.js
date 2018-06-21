
var validIPAddress = function(IP) {
    var isV4 = false, isV6 = false, curSeg = '', segCount = 0, ORIGINIP = IP, isLast = false;
    function strShift(str) {
      if(str.length === 1) return ''
      else {
        return str.substr(-(str.length-1))
      }
    }

    for(var i = 0; i < ORIGINIP.length; i++) {
      if(ORIGINIP[i] === '.' || (IP.indexOf('.') === -1 && isV4)) {   //test for v4
        if(IP[IP.length-1] === '.') return 'Neither'
        isV4 = true
        curSeg = ''
        if(IP.length && IP.indexOf('.') === -1) {
          for(var l = 0; l < IP.length; l++) {
            if(IP[l] < '0' || IP[l] > '9') {debugger;return 'Neither'}
          }
          curSeg = IP
          isLast = true
        }else {
          for(var j = 0; j < IP.length; j ++) {
            j= 0
            if(IP[0] === '.') {
              IP = strShift(IP)
              break
            }else {
              if(IP[0] < '0' || IP[0] > '9') {debugger;return 'Neither'}
              curSeg += IP[0]
              IP = strShift(IP)
            }
          }
        }
        // if(curSeg[0] === '0') {debugger;return 'Neither'}
        if(curSeg[0] === '0' && curSeg.length > 1) {debugger;return 'Neither'}
        if(!curSeg.length) {debugger;return 'Neither'}
        intCurSeg = parseInt(curSeg)
        if(intCurSeg > 255 || intCurSeg < 0) {debugger;return 'Neither'}
        segCount++
        debugger
        if(isLast) break
        // debugger
      }else if(ORIGINIP[i] === ':' || (IP.indexOf(':') === -1 && isV6)){
        if(IP[IP.length-1] === ':') return 'Neither'
        isV6 = true
        IP = IP.toLowerCase()
        curSeg = ''
        if(IP.length && IP.indexOf(':') === -1) {
          debugger
          curSeg = IP
          isLast = true
        }else {
          for(var j = 0; j < IP.length; j ++) {
            j= 0
            if(IP[0] === ':') {
              IP = strShift(IP)
              break
            }else {
              curSeg += IP[0]
              IP = strShift(IP)
            }
          }
        }
        if(curSeg.length === 0 || curSeg.length > 4) {debugger;return 'Neither'}
        for(var k = 0; k < curSeg.length; k++) {
          if( (curSeg[k] >= '0' && curSeg[k] <= '9') || (curSeg[k] >= 'a' && curSeg[k] <= 'f'))
          {

          }else {
            debugger
            return 'Neither'
          }
        }
        segCount++
        if(isLast) break

      }
    }
    if(!isV4 && !isV6) return 'Neither'
    if(isV4 && segCount !== 4) return 'Neither'
    debugger
    if(isV6 && segCount !== 8) return 'Neither'
    return isV4 ? 'IPv4' : 'IPv6'
};


validIPAddress("0.0.0.-0")




//第三版答案
//66 / 79 test cases passed.
//Status: Wrong Answer
