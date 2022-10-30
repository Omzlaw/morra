// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      6: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2, ctc1],
      8: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1],
      10: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      12: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const v469 = stdlib.protect(ctc0, await interact.setWager(), {
    at: './index.rsh:127:51:application',
    fs: ['at ./index.rsh:126:15:application call to [unknown function] (defined at: ./index.rsh:126:19:function exp)'],
    msg: 'setWager',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v469],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:129:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v469, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v471], secs: v473, time: v472, didSend: v101, from: v470 } = txn1;
      
      sim_r.txns.push({
        amt: v471,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v471], secs: v473, time: v472, didSend: v101, from: v470 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v480, time: v479, didSend: v110, from: v478 } = txn2;
  const v482 = stdlib.add(v471, v471);
  ;
  let v483 = stdlib.checkedBigNumberify('./index.rsh:143:83:decimal', stdlib.UInt_max, '0');
  let v484 = stdlib.checkedBigNumberify('./index.rsh:143:86:decimal', stdlib.UInt_max, '0');
  let v485 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v486 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v487 = v479;
  let v494 = v482;
  
  let txn3 = txn2;
  while (await (async () => {
    const v506 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v506;})()) {
    const v513 = stdlib.safeAdd(v487, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
    stdlib.protect(ctc1, await interact.seePoints(v483, v484, v486), {
      at: './index.rsh:151:31:application',
      fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)'],
      msg: 'seePoints',
      who: 'Alice'
      });
    
    const v521 = stdlib.protect(ctc0, await interact.getHand(), {
      at: './index.rsh:155:48:application',
      fs: ['at ./index.rsh:154:19:application call to [unknown function] (defined at: ./index.rsh:154:23:function exp)'],
      msg: 'getHand',
      who: 'Alice'
      });
    const v522 = stdlib.protect(ctc0, await interact.getGuess(v521), {
      at: './index.rsh:156:50:application',
      fs: ['at ./index.rsh:154:19:application call to [unknown function] (defined at: ./index.rsh:154:23:function exp)'],
      msg: 'getGuess',
      who: 'Alice'
      });
    const v523 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:158:70:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:154:19:application call to [unknown function] (defined at: ./index.rsh:154:23:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v524 = stdlib.digest([ctc0, ctc0], [v523, v521]);
    const v526 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:161:72:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:154:19:application call to [unknown function] (defined at: ./index.rsh:154:23:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v527 = stdlib.digest([ctc0, ctc0], [v526, v522]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v470, v471, v478, v483, v484, v494, v513, v524],
      evt_cnt: 1,
      funcNum: 3,
      lct: v487,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:165:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v530], secs: v532, time: v531, didSend: v155, from: v529 } = txn4;
        
        ;
        const v540 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v513],
      tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v470, v471, v478, v483, v484, v494, v513],
        evt_cnt: 0,
        funcNum: 4,
        lct: v487,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v700, time: v699, didSend: v379, from: v698 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v478,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v700, time: v699, didSend: v379, from: v698 } = txn5;
      ;
      const v701 = stdlib.addressEq(v470, v698);
      const v702 = stdlib.addressEq(v478, v698);
      const v703 = v701 ? true : v702;
      stdlib.assert(v703, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:166:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:122:35:application',
        fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:120:30:function exp)', 'at ./index.rsh:166:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v530], secs: v532, time: v531, didSend: v155, from: v529 } = txn4;
      ;
      const v533 = stdlib.addressEq(v470, v529);
      stdlib.assert(v533, {
        at: './index.rsh:165:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v540 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
      const txn5 = await (ctc.sendrecv({
        args: [v470, v471, v478, v483, v484, v494, v530, v540, v527],
        evt_cnt: 1,
        funcNum: 5,
        lct: v531,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:170:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v543], secs: v545, time: v544, didSend: v161, from: v542 } = txn5;
          
          ;
          const v553 = stdlib.safeAdd(v544, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v540],
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v470, v471, v478, v483, v484, v494, v530, v540],
          evt_cnt: 0,
          funcNum: 6,
          lct: v531,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v682, time: v681, didSend: v345, from: v680 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v478,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v682, time: v681, didSend: v345, from: v680 } = txn6;
        ;
        const v683 = stdlib.addressEq(v470, v680);
        const v684 = stdlib.addressEq(v478, v680);
        const v685 = v683 ? true : v684;
        stdlib.assert(v685, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:171:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:122:35:application',
          fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:120:30:function exp)', 'at ./index.rsh:171:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v543], secs: v545, time: v544, didSend: v161, from: v542 } = txn5;
        ;
        const v546 = stdlib.addressEq(v470, v542);
        stdlib.assert(v546, {
          at: './index.rsh:170:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v553 = stdlib.safeAdd(v544, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v553],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v470, v471, v478, v483, v484, v494, v530, v543, v553],
            evt_cnt: 0,
            funcNum: 8,
            lct: v544,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v664, time: v663, didSend: v311, from: v662 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v470,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v664, time: v663, didSend: v311, from: v662 } = txn7;
          ;
          const v665 = stdlib.addressEq(v470, v662);
          const v666 = stdlib.addressEq(v478, v662);
          const v667 = v665 ? true : v666;
          stdlib.assert(v667, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:180:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:122:35:application',
            fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:120:30:function exp)', 'at ./index.rsh:180:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v560, v561], secs: v563, time: v562, didSend: v173, from: v559 } = txn6;
          ;
          const v564 = stdlib.addressEq(v478, v559);
          stdlib.assert(v564, {
            at: './index.rsh:179:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v571 = stdlib.safeAdd(v562, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
          const txn7 = await (ctc.sendrecv({
            args: [v470, v471, v478, v483, v484, v494, v530, v543, v560, v561, v571, v523, v521],
            evt_cnt: 2,
            funcNum: 9,
            lct: v562,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:190:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v576, v577], secs: v579, time: v578, didSend: v183, from: v575 } = txn7;
              
              ;
              const v589 = stdlib.safeAdd(v578, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v571],
            tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v470, v471, v478, v483, v484, v494, v530, v543, v560, v561, v571],
              evt_cnt: 0,
              funcNum: 10,
              lct: v562,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v646, time: v645, didSend: v277, from: v644 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v478,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v646, time: v645, didSend: v277, from: v644 } = txn8;
            ;
            const v647 = stdlib.addressEq(v470, v644);
            const v648 = stdlib.addressEq(v478, v644);
            const v649 = v647 ? true : v648;
            stdlib.assert(v649, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:191:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:122:35:application',
              fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:120:30:function exp)', 'at ./index.rsh:191:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v576, v577], secs: v579, time: v578, didSend: v183, from: v575 } = txn7;
            ;
            const v580 = stdlib.addressEq(v470, v575);
            stdlib.assert(v580, {
              at: './index.rsh:190:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v581 = stdlib.digest([ctc0, ctc0], [v576, v577]);
            const v582 = stdlib.digestEq(v530, v581);
            stdlib.assert(v582, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:192:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v589 = stdlib.safeAdd(v578, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
            const txn8 = await (ctc.sendrecv({
              args: [v470, v471, v478, v483, v484, v494, v543, v560, v561, v577, v589, v526, v522],
              evt_cnt: 2,
              funcNum: 11,
              lct: v578,
              onlyIf: true,
              out_tys: [ctc0, ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:195:15:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v592, v593], secs: v595, time: v594, didSend: v193, from: v591 } = txn8;
                
                ;
                let v599;
                const v600 = stdlib.safeAdd(v577, v560);
                const v601 = stdlib.eq(v593, v561);
                if (v601) {
                  const v603 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                  const v604 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                  const v734 = v604 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v602 = v603 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v734;
                  const v605 = [v602, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v483, v484];
                  v599 = v605;
                  }
                else {
                  const v606 = stdlib.eq(v600, v593);
                  if (v606) {
                    const v607 = stdlib.safeAdd(v483, stdlib.checkedBigNumberify('./index.rsh:31:51:decimal', stdlib.UInt_max, '1'));
                    const v609 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                    const v610 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                    const v735 = v610 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v608 = v609 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v735;
                    const v611 = [v608, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v607, v484];
                    v599 = v611;
                    }
                  else {
                    const v612 = stdlib.eq(v600, v561);
                    if (v612) {
                      const v613 = stdlib.safeAdd(v484, stdlib.checkedBigNumberify('./index.rsh:35:47:decimal', stdlib.UInt_max, '1'));
                      const v615 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                      const v616 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                      const v736 = v616 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      const v614 = v615 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v736;
                      const v617 = [v614, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v483, v613];
                      v599 = v617;
                      }
                    else {
                      const v619 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                      const v620 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                      const v737 = v620 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      const v618 = v619 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v737;
                      const v621 = [v618, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v483, v484];
                      v599 = v621;
                      }
                    }
                  }
                const v622 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '0')];
                const v623 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '1')];
                const v624 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '2')];
                const v625 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '3')];
                const cv483 = v624;
                const cv484 = v625;
                const cv485 = v622;
                const cv486 = v623;
                const cv487 = v594;
                const cv494 = v494;
                
                await (async () => {
                  const v483 = cv483;
                  const v484 = cv484;
                  const v485 = cv485;
                  const v486 = cv486;
                  const v487 = cv487;
                  const v494 = cv494;
                  
                  if (await (async () => {
                    const v506 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                    
                    return v506;})()) {
                    const v513 = stdlib.safeAdd(v487, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
                    sim_r.isHalt = false;
                    }
                  else {
                    const v716 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                    const v719 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:205:14:decimal', stdlib.UInt_max, '2'), v471);
                    const v721 = v716 ? v470 : v478;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v721,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v589],
              tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn8.didTimeout) {
              const txn9 = await (ctc.sendrecv({
                args: [v470, v471, v478, v483, v484, v494, v543, v560, v561, v577, v589],
                evt_cnt: 0,
                funcNum: 12,
                lct: v578,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v628, time: v627, didSend: v243, from: v626 } = txn9;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v478,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v628, time: v627, didSend: v243, from: v626 } = txn9;
              ;
              const v629 = stdlib.addressEq(v470, v626);
              const v630 = stdlib.addressEq(v478, v626);
              const v631 = v629 ? true : v630;
              stdlib.assert(v631, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:196:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:122:35:application',
                fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:120:30:function exp)', 'at ./index.rsh:196:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v592, v593], secs: v595, time: v594, didSend: v193, from: v591 } = txn8;
              ;
              const v596 = stdlib.addressEq(v470, v591);
              stdlib.assert(v596, {
                at: './index.rsh:195:15:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v597 = stdlib.digest([ctc0, ctc0], [v592, v593]);
              const v598 = stdlib.digestEq(v543, v597);
              stdlib.assert(v598, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:197:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              let v599;
              const v600 = stdlib.safeAdd(v577, v560);
              const v601 = stdlib.eq(v593, v561);
              if (v601) {
                const v603 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                const v604 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                const v734 = v604 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v602 = v603 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v734;
                const v605 = [v602, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v483, v484];
                v599 = v605;
                }
              else {
                const v606 = stdlib.eq(v600, v593);
                if (v606) {
                  const v607 = stdlib.safeAdd(v483, stdlib.checkedBigNumberify('./index.rsh:31:51:decimal', stdlib.UInt_max, '1'));
                  const v609 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                  const v610 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                  const v735 = v610 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v608 = v609 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v735;
                  const v611 = [v608, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v607, v484];
                  v599 = v611;
                  }
                else {
                  const v612 = stdlib.eq(v600, v561);
                  if (v612) {
                    const v613 = stdlib.safeAdd(v484, stdlib.checkedBigNumberify('./index.rsh:35:47:decimal', stdlib.UInt_max, '1'));
                    const v615 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                    const v616 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                    const v736 = v616 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v614 = v615 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v736;
                    const v617 = [v614, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v483, v613];
                    v599 = v617;
                    }
                  else {
                    const v619 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                    const v620 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                    const v737 = v620 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v618 = v619 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v737;
                    const v621 = [v618, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v483, v484];
                    v599 = v621;
                    }
                  }
                }
              const v622 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '0')];
              const v623 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '1')];
              const v624 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '2')];
              const v625 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '3')];
              const cv483 = v624;
              const cv484 = v625;
              const cv485 = v622;
              const cv486 = v623;
              const cv487 = v594;
              const cv494 = v494;
              
              v483 = cv483;
              v484 = cv484;
              v485 = cv485;
              v486 = cv486;
              v487 = cv487;
              v494 = cv494;
              
              txn3 = txn8;
              continue;}
            
            }
          
          }
        
        }
      
      }
    
    }
  const v716 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v719 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:205:14:decimal', stdlib.UInt_max, '2'), v471);
  const v721 = v716 ? v470 : v478;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v485, v483, v484), {
    at: './index.rsh:210:28:application',
    fs: ['at ./index.rsh:209:9:application call to [unknown function] (defined at: ./index.rsh:209:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v471], secs: v473, time: v472, didSend: v101, from: v470 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v471), {
    at: './index.rsh:134:29:application',
    fs: ['at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v470, v471],
    evt_cnt: 0,
    funcNum: 1,
    lct: v472,
    onlyIf: true,
    out_tys: [],
    pay: [v471, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v480, time: v479, didSend: v110, from: v478 } = txn2;
      
      const v482 = stdlib.add(v471, v471);
      sim_r.txns.push({
        amt: v471,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v483 = stdlib.checkedBigNumberify('./index.rsh:143:83:decimal', stdlib.UInt_max, '0');
      const v484 = stdlib.checkedBigNumberify('./index.rsh:143:86:decimal', stdlib.UInt_max, '0');
      const v485 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v486 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v487 = v479;
      const v494 = v482;
      
      if (await (async () => {
        const v506 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v506;})()) {
        const v513 = stdlib.safeAdd(v487, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
        sim_r.isHalt = false;
        }
      else {
        const v716 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v719 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:205:14:decimal', stdlib.UInt_max, '2'), v471);
        const v721 = v716 ? v470 : v478;
        sim_r.txns.push({
          kind: 'from',
          to: v721,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v480, time: v479, didSend: v110, from: v478 } = txn2;
  const v482 = stdlib.add(v471, v471);
  ;
  let v483 = stdlib.checkedBigNumberify('./index.rsh:143:83:decimal', stdlib.UInt_max, '0');
  let v484 = stdlib.checkedBigNumberify('./index.rsh:143:86:decimal', stdlib.UInt_max, '0');
  let v485 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v486 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v487 = v479;
  let v494 = v482;
  
  let txn3 = txn2;
  while (await (async () => {
    const v506 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v506;})()) {
    const v513 = stdlib.safeAdd(v487, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
    stdlib.protect(ctc1, await interact.seePoints(v483, v484, v486), {
      at: './index.rsh:151:31:application',
      fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)'],
      msg: 'seePoints',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: ['time', v513],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v470, v471, v478, v483, v484, v494, v513],
        evt_cnt: 0,
        funcNum: 4,
        lct: v487,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v700, time: v699, didSend: v379, from: v698 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v478,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v700, time: v699, didSend: v379, from: v698 } = txn5;
      ;
      const v701 = stdlib.addressEq(v470, v698);
      const v702 = stdlib.addressEq(v478, v698);
      const v703 = v701 ? true : v702;
      stdlib.assert(v703, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:166:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:122:35:application',
        fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:120:30:function exp)', 'at ./index.rsh:166:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v530], secs: v532, time: v531, didSend: v155, from: v529 } = txn4;
      ;
      const v533 = stdlib.addressEq(v470, v529);
      stdlib.assert(v533, {
        at: './index.rsh:165:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v540 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc2],
        timeoutAt: ['time', v540],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v470, v471, v478, v483, v484, v494, v530, v540],
          evt_cnt: 0,
          funcNum: 6,
          lct: v531,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v682, time: v681, didSend: v345, from: v680 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v478,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v682, time: v681, didSend: v345, from: v680 } = txn6;
        ;
        const v683 = stdlib.addressEq(v470, v680);
        const v684 = stdlib.addressEq(v478, v680);
        const v685 = v683 ? true : v684;
        stdlib.assert(v685, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:171:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:122:35:application',
          fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:120:30:function exp)', 'at ./index.rsh:171:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v543], secs: v545, time: v544, didSend: v161, from: v542 } = txn5;
        ;
        const v546 = stdlib.addressEq(v470, v542);
        stdlib.assert(v546, {
          at: './index.rsh:170:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v553 = stdlib.safeAdd(v544, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
        const v557 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:176:56:application',
          fs: ['at ./index.rsh:175:17:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v558 = stdlib.protect(ctc0, await interact.getGuess(v557), {
          at: './index.rsh:177:58:application',
          fs: ['at ./index.rsh:175:17:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn6 = await (ctc.sendrecv({
          args: [v470, v471, v478, v483, v484, v494, v530, v543, v553, v557, v558],
          evt_cnt: 2,
          funcNum: 7,
          lct: v544,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:179:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v560, v561], secs: v563, time: v562, didSend: v173, from: v559 } = txn6;
            
            ;
            const v571 = stdlib.safeAdd(v562, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v553],
          tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v470, v471, v478, v483, v484, v494, v530, v543, v553],
            evt_cnt: 0,
            funcNum: 8,
            lct: v544,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v664, time: v663, didSend: v311, from: v662 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v470,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v664, time: v663, didSend: v311, from: v662 } = txn7;
          ;
          const v665 = stdlib.addressEq(v470, v662);
          const v666 = stdlib.addressEq(v478, v662);
          const v667 = v665 ? true : v666;
          stdlib.assert(v667, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:180:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:122:35:application',
            fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:120:30:function exp)', 'at ./index.rsh:180:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v560, v561], secs: v563, time: v562, didSend: v173, from: v559 } = txn6;
          ;
          const v564 = stdlib.addressEq(v478, v559);
          stdlib.assert(v564, {
            at: './index.rsh:179:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v571 = stdlib.safeAdd(v562, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 9,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v571],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v470, v471, v478, v483, v484, v494, v530, v543, v560, v561, v571],
              evt_cnt: 0,
              funcNum: 10,
              lct: v562,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v646, time: v645, didSend: v277, from: v644 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v478,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v646, time: v645, didSend: v277, from: v644 } = txn8;
            ;
            const v647 = stdlib.addressEq(v470, v644);
            const v648 = stdlib.addressEq(v478, v644);
            const v649 = v647 ? true : v648;
            stdlib.assert(v649, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:191:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:122:35:application',
              fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:120:30:function exp)', 'at ./index.rsh:191:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v576, v577], secs: v579, time: v578, didSend: v183, from: v575 } = txn7;
            ;
            const v580 = stdlib.addressEq(v470, v575);
            stdlib.assert(v580, {
              at: './index.rsh:190:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v581 = stdlib.digest([ctc0, ctc0], [v576, v577]);
            const v582 = stdlib.digestEq(v530, v581);
            stdlib.assert(v582, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:192:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v589 = stdlib.safeAdd(v578, stdlib.checkedBigNumberify('./index.rsh:104:18:decimal', stdlib.UInt_max, '10'));
            const txn8 = await (ctc.recv({
              didSend: false,
              evt_cnt: 2,
              funcNum: 11,
              out_tys: [ctc0, ctc0],
              timeoutAt: ['time', v589],
              waitIfNotPresent: false
              }));
            if (txn8.didTimeout) {
              const txn9 = await (ctc.sendrecv({
                args: [v470, v471, v478, v483, v484, v494, v543, v560, v561, v577, v589],
                evt_cnt: 0,
                funcNum: 12,
                lct: v578,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v628, time: v627, didSend: v243, from: v626 } = txn9;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v478,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v628, time: v627, didSend: v243, from: v626 } = txn9;
              ;
              const v629 = stdlib.addressEq(v470, v626);
              const v630 = stdlib.addressEq(v478, v626);
              const v631 = v629 ? true : v630;
              stdlib.assert(v631, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:196:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:122:35:application',
                fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:120:30:function exp)', 'at ./index.rsh:196:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v592, v593], secs: v595, time: v594, didSend: v193, from: v591 } = txn8;
              ;
              const v596 = stdlib.addressEq(v470, v591);
              stdlib.assert(v596, {
                at: './index.rsh:195:15:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v597 = stdlib.digest([ctc0, ctc0], [v592, v593]);
              const v598 = stdlib.digestEq(v543, v597);
              stdlib.assert(v598, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:197:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              let v599;
              const v600 = stdlib.safeAdd(v577, v560);
              const v601 = stdlib.eq(v593, v561);
              if (v601) {
                const v603 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                const v604 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                const v734 = v604 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v602 = v603 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v734;
                const v605 = [v602, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v483, v484];
                v599 = v605;
                }
              else {
                const v606 = stdlib.eq(v600, v593);
                if (v606) {
                  const v607 = stdlib.safeAdd(v483, stdlib.checkedBigNumberify('./index.rsh:31:51:decimal', stdlib.UInt_max, '1'));
                  const v609 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                  const v610 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                  const v735 = v610 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v608 = v609 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v735;
                  const v611 = [v608, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v607, v484];
                  v599 = v611;
                  }
                else {
                  const v612 = stdlib.eq(v600, v561);
                  if (v612) {
                    const v613 = stdlib.safeAdd(v484, stdlib.checkedBigNumberify('./index.rsh:35:47:decimal', stdlib.UInt_max, '1'));
                    const v615 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                    const v616 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                    const v736 = v616 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v614 = v615 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v736;
                    const v617 = [v614, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v483, v613];
                    v599 = v617;
                    }
                  else {
                    const v619 = stdlib.eq(v483, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                    const v620 = stdlib.eq(v484, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                    const v737 = v620 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v618 = v619 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v737;
                    const v621 = [v618, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v483, v484];
                    v599 = v621;
                    }
                  }
                }
              const v622 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '0')];
              const v623 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '1')];
              const v624 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '2')];
              const v625 = v599[stdlib.checkedBigNumberify('./index.rsh:199:9:array', stdlib.UInt_max, '3')];
              const cv483 = v624;
              const cv484 = v625;
              const cv485 = v622;
              const cv486 = v623;
              const cv487 = v594;
              const cv494 = v494;
              
              v483 = cv483;
              v484 = cv484;
              v485 = cv485;
              v486 = cv486;
              v487 = cv487;
              v494 = cv494;
              
              txn3 = txn8;
              continue;}
            
            }
          
          }
        
        }
      
      }
    
    }
  const v716 = stdlib.eq(v485, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v719 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:205:14:decimal', stdlib.UInt_max, '2'), v471);
  const v721 = v716 ? v470 : v478;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v485, v483, v484), {
    at: './index.rsh:210:28:application',
    fs: ['at ./index.rsh:209:9:application call to [unknown function] (defined at: ./index.rsh:209:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByATAAEIWAMKIAxIUAIEBoABoAGYAbABBWAmBAEAAQEACAAAAAAAAAABIjUAMRhBB0MqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQcMQAPjSSEFDEAB+UmBCwxAAZ9JIQcMQABWIQcSRCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNXKCA1/4AEyqvON7AyBjQDIQ9bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCBlpIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKVwAgNf8hCFs1/iEJWzX9gYgBWzX8STUFSSJbNfskWzX6gAQmZHvWNPsWUDT6FlCwMgY0AyEPWwxENP8xABJENANXYCA0+xY0+hZQARJENAOBkAFbNAMhDVsINfg0+jT8EkEAICMhCjT9IQQSTSI0/iEEEk0WK1A0/hZQNP0WUDX5QgB7NPg0+hJBACMjIQo0/SEEEk0iNP4hBBJNFiSvUDT+IwgWUDT9FlA1+UIAUDT4NPwSQQArIyEKNP0hBBJNIjT+IQQSTRaACAAAAAAAAAACUDT+FlA0/SMIFlA1+UIAHSMhCjT9IQQSTSI0/iEEEk0WK1A0/hZQNP0WUDX5NP80AyEGWzQDVyggNPmBEFs0+YEYWzT5Ils0+SRbMgY0AyVbQgSvSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNXKCA1/4AE00RzI7AyBjQDIRBbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCBMVJJAxAASdJgQkMQADOSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/IQZbNf5XKCA1/SEIWzX8IQlbNfslWzX6V4AgNfkhDls1+IGoAVs190k1BUkiWzX2JFs19YAEqdlNPTT2FlA09RZQsDIGNAMhEFsMRDT/MQASRDQDV2AgNPYWNPUWUAESRDIGIQUINfQ0/zT+FlA0/VA0/BZQNPsWUDT6FlA0+VA0+BZQNPcWUDT1FlA09BZQKEsBVwB/ZylLAVd/IWdIIQc1ATIGNQJCBAZIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABBf82y6wMgY0AyEOWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgOYSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yEGWzX+VyggNf0hCFs1/CEJWzX7JVs1+ldgIDX5V4AgNfhJNQVJIls19yRbNfaABIJre3Y09xZQNPYWULAyBjQDIQ5bDEQ0/TEAEkQyBiEFCDX1NP80/hZQNP1QNPwWUDT7FlA0+hZQNPlQNPhQNPcWUDT2FlA09RZQKEsBVwB/ZylLAVd/OWdIIQU1ATIGNQJCAv5JIQsMQAFOSSERDEAA90khDAxAAFNIIQw0ARJENARJIhJMNAISEUQoZClkUEk1A1coIDX/gARhtKwMsDIGNAMhDVsPRDQDVwAgMQASNP8xABIRRLEisgE0AyVbsggjshA0/7IHs0ICekghDDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQZbNf5XKCA1/SEIWzX8IQlbNfslWzX6V2AgNflJNQU1+IAEzaboyzT4ULAyBjQDIQ1bDEQ0/zEAEkQyBiEFCDX3NP80/hZQNP1QNPwWUDT7FlA0+hZQNPlQNPhQNPcWUChLAVcAf2cpSwFXfylnSCQ1ATIGNQJCAflIIQs0ARJENARJIhJMNAISEUQoZEk1A1coIDX/gASRJzTzsDIGNAMhElsPRDQDVwAgMQASNP8xABIRRLEisgE0AyVbsggjshA0/7IHs0IBjUkjDEAA2EkhBAxAAJJIIQs0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQZbNf5XKCA1/SEIWzX8IQlbNfslWzX6STUFNfmABBPu6lE0+VCwMgY0AyESWwxENP8xABJEMgYhBQg1+DT/NP4WUDT9UDT8FlA0+xZQNPoWUDT5UDT4FlAoSwFXAH9nKUsBV38JZ0ghDDUBMgY1AkIBCiMSRCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDT/iAEzNANXACA0/zEAIiIjIzIGNP9JCEIARkiBoI0GiAEVIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwNP+IAO8xADT/FlAoSwFXAChnSCM1ATIGNQJCAIU1/zX+Nf01/DX7Nfo1+TX4Nfc0/CMSQQAzNP4hBQg19jT3NPgWUDT5UDT6FlA0+xZQNP8WUDT2FlAoSwFXAGhnSCELNQEyBjUCQgA5sSKyASEKNPgLsggjshA0+TT3NPwiEk2yB7NCAAAxGSEREkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 184,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v471",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v471",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v592",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v593",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v530",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v543",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v560",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v561",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v577",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v592",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v593",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v530",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v543",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v560",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v561",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v577",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200276a3803806200276a8339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b6124bc80620002ae6000396000f3fe6080604052600436106100d55760003560e01c80638323075711610079578063c798003711610056578063c7980037146101bf578063e00acef1146101d2578063e533a29d146101e5578063f4cedab0146101f857005b80638323075714610174578063a7661d5414610189578063ab53f2c61461019c57005b80632c10a159116100b25780632c10a15914610128578063422eb85c1461013b578063552d7b8e1461014e57806366ad16d01461016157005b806311faee8c146100de5780631e93b0f1146100f1578063273206b81461011557005b366100dc57005b005b6100dc6100ec366004611e90565b61020b565b3480156100fd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc610123366004611ec5565b6103c2565b6100dc610136366004611e90565b6106a2565b6100dc610149366004611ec5565b61082f565b6100dc61015c366004611e90565b610a94565b6100dc61016f366004611ec5565b610d1b565b34801561018057600080fd5b50600154610102565b6100dc610197366004611e90565b611118565b3480156101a857600080fd5b506101b1611272565b60405161010c929190611ee1565b6100dc6101cd366004611e90565b61130f565b6100dc6101e0366004611e90565b611469565b6100dc6101f3366004611e90565b6115c4565b6100dc610206366004611e90565b61175c565b61021b600c60005414603c6119c8565b6102358135158061022e57506001548235145b603d6119c8565b60008080556002805461024790611f3e565b80601f016020809104026020016040519081016040528092919081815260200182805461027390611f3e565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b50505050508060200190518101906102d89190612098565b90506102ed816101400151431015603e6119c8565b7f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf338360405161031e9291906120b5565b60405180910390a16103323415603a6119c8565b8051610366906001600160a01b0316331461035c5760408201516001600160a01b0316331461035f565b60015b603b6119c8565b80604001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156103a7573d6000803e3d6000fd5b50600080805560018190556103be90600290611c3e565b5050565b6103d2600a60005414602c6119c8565b6103ec813515806103e557506001548235145b602d6119c8565b6000808055600280546103fe90611f3e565b80601f016020809104026020016040519081016040528092919081815260200182805461042a90611f3e565b80156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b505050505080602001905181019061048f9190612098565b90506104a76040518060200160405280600081525090565b6104b98261014001514310602e6119c8565b7f61a975c2eb129c07d71a871df28eb78724f84a0b02b4a03b148b42a7224a9a2833846040516104ea9291906120f2565b60405180910390a16104fe341560296119c8565b8151610516906001600160a01b03163314602a6119c8565b604080516105629161053c91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360c0015114602b6119c8565b61056d43600a6119ee565b8160000181815250506105e560405180610160016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260e08086015160c08501526101008087015191850191909152610120808701519185019190915286830135908401528351610140840152600c600055436001559051610677918391016121a9565b6040516020818303038152906040526002908051906020019061069b929190611c7b565b5050505050565b6106b260016000541460096119c8565b6106cc813515806106c557506001548235145b600a6119c8565b6000808055600280546106de90611f3e565b80601f016020809104026020016040519081016040528092919081815260200182805461070a90611f3e565b80156107575780601f1061072c57610100808354040283529160200191610757565b820191906000526020600020905b81548152906001019060200180831161073a57829003601f168201915b505050505080602001905181019061076f91906121b8565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516107a29291906120b5565b60405180910390a16107bb8160200151341460086119c8565b6107c3611cff565b815181516001600160a01b0390911690526020808301805183518301528251336040918201528284018051600090819052815190940193909352825160019101819052825160600152905143608090910152518001602082015160a0015261082a81611a41565b505050565b61083f60086000541460216119c8565b6108598135158061085257506001548235145b60226119c8565b60008080556002805461086b90611f3e565b80601f016020809104026020016040519081016040528092919081815260200182805461089790611f3e565b80156108e45780601f106108b9576101008083540402835291602001916108e4565b820191906000526020600020905b8154815290600101906020018083116108c757829003601f168201915b50505050508060200190518101906108fc919061221d565b90506109146040518060200160405280600081525090565b610926826101000151431060236119c8565b7f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa33846040516109579291906120f2565b60405180910390a161096b3415601f6119c8565b6040820151610986906001600160a01b0316331460206119c8565b61099143600a6119ee565b816000018181525050610a0960405180610160016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c0808601519084015260e0808601519084015285810135610100840152858201356101208401528351610140840152600a600055436001559051610677918391016121a9565b610aa460066000541460176119c8565b610abe81351580610ab757506001548235145b60186119c8565b600080805560028054610ad090611f3e565b80601f0160208091040260200160405190810160405280929190818152602001828054610afc90611f3e565b8015610b495780601f10610b1e57610100808354040283529160200191610b49565b820191906000526020600020905b815481529060010190602001808311610b2c57829003601f168201915b5050505050806020019051810190610b6191906122a6565b9050610b796040518060200160405280600081525090565b610b8a8260e00151431060196119c8565b7f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d33384604051610bbb929190612352565b60405180910390a1610bcf341560156119c8565b8151610be7906001600160a01b0316331460166119c8565b610bf243600a6119ee565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c080860151908401528581013560e0840152835161010084015260086000554360015590516106779183910181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b610d2b600c6000541460376119c8565b610d4581351580610d3e57506001548235145b60386119c8565b600080805560028054610d5790611f3e565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8390611f3e565b8015610dd05780601f10610da557610100808354040283529160200191610dd0565b820191906000526020600020905b815481529060010190602001808311610db357829003601f168201915b5050505050806020019051810190610de89190612098565b9050610df2611d66565b610e04826101400151431060396119c8565b7fde56afa74c9f6c9211234ba8c87db17d1f2d7f456e99f217651173a9368d4d463384604051610e359291906120f2565b60405180910390a1610e49341560346119c8565b8151610e61906001600160a01b0316331460356119c8565b60408051610ead91610e8791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360c001511460366119c8565b610ec08261012001518360e001516119ee565b602082015261010082015160408401351415610f36576003826060015114610efc576003826080015114610ef5576001610eff565b6002610eff565b60005b604080830180519290925281516001602090910152606080850151835190920191909152608084015182519091015251815261108b565b602081015160408401351415610fb3576003826060015114610f6c576003826080015114610f65576001610f6f565b6002610f6f565b60005b606080830180519290925290516000602090910152820151610f929060016119ee565b6060808301805160400192909252608084015182519091015251815261108b565b81610100015181602001511415611033576003826060015114610fea576003826080015114610fe3576001610fed565b6002610fed565b60005b608080830180519290925281516002602090910152606084015191516040019190915282015161101e9060016119ee565b6080820180516060019190915251815261108b565b600382606001511461105957600382608001511461105257600161105c565b600261105c565b60005b60a082018051919091528051600160209091015260608084015182516040015260808401518251909101525181525b611093611cff565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925283518201518184018051919091528451606090810151825184015285515182519094019390935284519091015181519092019190915280514360809091015260a0808501519151015261111281611a41565b50505050565b61112860046000541460126119c8565b6111428135158061113b57506001548235145b60136119c8565b60008080556002805461115490611f3e565b80601f016020809104026020016040519081016040528092919081815260200182805461118090611f3e565b80156111cd5780601f106111a2576101008083540402835291602001916111cd565b820191906000526020600020905b8154815290600101906020018083116111b057829003601f168201915b50505050508060200190518101906111e59190612379565b90506111f98160c0015143101560146119c8565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722338360405161122a9291906120b5565b60405180910390a161123e341560106119c8565b8051610366906001600160a01b031633146112685760408201516001600160a01b0316331461126b565b60015b60116119c8565b60006060600054600280805461128790611f3e565b80601f01602080910402602001604051908101604052809291908181526020018280546112b390611f3e565b80156113005780601f106112d557610100808354040283529160200191611300565b820191906000526020600020905b8154815290600101906020018083116112e357829003601f168201915b50505050509050915091509091565b61131f600660005414601c6119c8565b6113398135158061133257506001548235145b601d6119c8565b60008080556002805461134b90611f3e565b80601f016020809104026020016040519081016040528092919081815260200182805461137790611f3e565b80156113c45780601f10611399576101008083540402835291602001916113c4565b820191906000526020600020905b8154815290600101906020018083116113a757829003601f168201915b50505050508060200190518101906113dc91906122a6565b90506113f08160e00151431015601e6119c8565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33836040516114219291906120b5565b60405180910390a16114353415601a6119c8565b8051610366906001600160a01b0316331461145f5760408201516001600160a01b03163314611462565b60015b601b6119c8565b611479600a6000541460316119c8565b6114938135158061148c57506001548235145b60326119c8565b6000808055600280546114a590611f3e565b80601f01602080910402602001604051908101604052809291908181526020018280546114d190611f3e565b801561151e5780601f106114f35761010080835404028352916020019161151e565b820191906000526020600020905b81548152906001019060200180831161150157829003601f168201915b50505050508060200190518101906115369190612098565b905061154b81610140015143101560336119c8565b7f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a338360405161157c9291906120b5565b60405180910390a16115903415602f6119c8565b8051610366906001600160a01b031633146115ba5760408201516001600160a01b031633146115bd565b60015b60306119c8565b6115d460086000541460266119c8565b6115ee813515806115e757506001548235145b60276119c8565b60008080556002805461160090611f3e565b80601f016020809104026020016040519081016040528092919081815260200182805461162c90611f3e565b80156116795780601f1061164e57610100808354040283529160200191611679565b820191906000526020600020905b81548152906001019060200180831161165c57829003601f168201915b5050505050806020019051810190611691919061221d565b90506116a681610100015143101560286119c8565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633836040516116d79291906120b5565b60405180910390a16116eb341560246119c8565b805161171f906001600160a01b031633146117155760408201516001600160a01b03163314611718565b60015b60256119c8565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103a7573d6000803e3d6000fd5b61176c600460005414600d6119c8565b6117868135158061177f57506001548235145b600e6119c8565b60008080556002805461179890611f3e565b80601f01602080910402602001604051908101604052809291908181526020018280546117c490611f3e565b80156118115780601f106117e657610100808354040283529160200191611811565b820191906000526020600020905b8154815290600101906020018083116117f457829003601f168201915b50505050508060200190518101906118299190612379565b90506118416040518060200160405280600081525090565b6118528260c001514310600f6119c8565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13384604051611883929190612352565b60405180910390a16118973415600b6119c8565b81516118af906001600160a01b03163314600c6119c8565b6118ba43600a6119ee565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a080860151908401528581013560c0840152835160e084015260066000554360015590516106779183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816103be5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826119fb838261242d565b9150811015611a3b5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016119e5565b92915050565b60408051602081019091526000815260018260200151604001511415611b7b57611a74826020015160800151600a6119ee565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015185168187019081528389018051516060808a0191825282518701516080808c01918252935160a090810151818d019081528d5160c0808f0191825260046000554360015589519b8c019c909c529851978a01979097529451909916908701525190850152945194830194909452925191810191909152905160e08201526101000160405160208183030381529060405260029080519060200190611112929190611c7b565b60208201516040015115611b9457815160400151611b98565b8151515b6001600160a01b03166108fc611bb76002856000015160200151611bdf565b6040518115909202916000818181858888f193505050501580156103a7573d6000803e3d6000fd5b6000811580611c0357508282611bf58183612445565b9250611c019083612464565b145b611a3b5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016119e5565b508054611c4a90611f3e565b6000825580601f10611c5a575050565b601f016020900490600052602060002090810190611c789190611e63565b50565b828054611c8790611f3e565b90600052602060002090601f016020900481019282611ca95760008555611cef565b82601f10611cc257805160ff1916838001178555611cef565b82800160010185558215611cef579182015b82811115611cef578251825591602001919060010190611cd4565b50611cfb929150611e63565b5090565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611d616040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b905290565b6040518060c00160405280611d9c6040518060800160405280600081526020016000815260200160008152602001600081525090565b815260200160008152602001611dd36040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001611e036040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001611e336040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001611d616040518060800160405280600081526020016000815260200160008152602001600081525090565b5b80821115611cfb5760008155600101611e64565b600060408284031215611e8a57600080fd5b50919050565b600060408284031215611ea257600080fd5b611eac8383611e78565b9392505050565b600060608284031215611e8a57600080fd5b600060608284031215611ed757600080fd5b611eac8383611eb3565b82815260006020604081840152835180604085015260005b81811015611f1557858101830151858201606001528201611ef9565b81811115611f27576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611f5257607f821691505b60208210811415611e8a57634e487b7160e01b600052602260045260246000fd5b604051610160810167ffffffffffffffff81118282101715611fa557634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611fa557634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611ff457600080fd5b919050565b6000610160828403121561200c57600080fd5b612014611f73565b905061201f82611fdd565b81526020820151602082015261203760408301611fdd565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525061014080830151818301525092915050565b600061016082840312156120ab57600080fd5b611eac8383611ff9565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146120e357600080fd5b80604085015250509392505050565b6001600160a01b038316815260808101611eac60208301848035825260208082013590830152604090810135910152565b80516001600160a01b0316825260208101516020830152604081015161215460408401826001600160a01b03169052565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e080820151908301526101008082015190830152610120808201519083015261014090810151910152565b6101608101611a3b8284612123565b6000604082840312156121ca57600080fd5b6040516040810181811067ffffffffffffffff821117156121fb57634e487b7160e01b600052604160045260246000fd5b60405261220783611fdd565b8152602083015160208201528091505092915050565b6000610120828403121561223057600080fd5b612238611fab565b61224183611fdd565b81526020830151602082015261225960408401611fdd565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b60006101008083850312156122ba57600080fd5b6040519081019067ffffffffffffffff821181831017156122eb57634e487b7160e01b600052604160045260246000fd5b816040526122f884611fdd565b81526020840151602082015261231060408501611fdd565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b038316815260608101611eac602083018480358252602090810135910152565b600060e0828403121561238b57600080fd5b60405160e0810181811067ffffffffffffffff821117156123bc57634e487b7160e01b600052604160045260246000fd5b6040526123c883611fdd565b8152602083015160208201526123e060408401611fdd565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561244057612440612417565b500190565b600081600019048311821515161561245f5761245f612417565b500290565b60008261248157634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212202a10ae77c9f7bfc7ee4f35660af0235bc0c231eb986064e78a10c1318b63812364736f6c634300080c0033`,
  BytecodeLen: 10090,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:131:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:207:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:148:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:166:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:167:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:171:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:172:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:180:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:181:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:191:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:193:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:196:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
