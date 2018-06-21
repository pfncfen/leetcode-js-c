/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    var isV4 = false, isV6 = false, curSeg = '', segCount = 0;
    for(var i = 0; i < IP.length; i++) {
      if(isV4 || IP[i] === '.') {   //test for v4
        isV4 = true
        curSeg = ''
        for(var j = 0; j <= i; j ++) {
          curSeg += IP[j]
        }
        if(curSeg[0] === '0') return 'Neither'
        curSeg = parseInt(curSeg)
        if(curSeg >= 255 || curSeg < 0) return 'Neither'
        IP = IP.substr(-(IP.length - j))
        segCount++
        debugger
      }else if(isV6 || IP[i] === ':'){
        isV6 = true
        curSeg = ''
        for(var j = 0; j <= i; j ++) {
          curSeg += IP[j]
        }
        if(curSeg.length === 0 || curSeg.length > 4) return 'Neither'
        for(var k = 0; k < curSeg.length; k++) {
          if( (curSeg[k] >= '0' && curSeg[k] <= '9') || (curSeg[k] >= 'a' && curSeg[k] <= 'f') || (curSeg[k] >= 'A' && curSeg[k] <= 'F'))
          {

          }else {
            return 'Neither'
          }
        }
        IP = IP.substr(-(IP.length - j))
        segCount++
      }
    }
    if(!isV4 && !isV6) return 'Neither'
    if(isV4 && segCount !== 4) return 'Neither'
    if(isV6 && segCount !== 8) return 'Neither'
    return isV4 ? 'IPv4' : 'IPv6'


};


//第一版答案
//59 / 79 test cases passed.
//Status: Wrong Answer
