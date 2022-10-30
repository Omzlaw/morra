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
      1: [ctc0, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1],
      10: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      12: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1]
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
  
  
  const v469 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  
  const v472 = stdlib.protect(ctc0, await interact.setWager(), {
    at: './index.rsh:128:51:application',
    fs: ['at ./index.rsh:127:15:application call to [unknown function] (defined at: ./index.rsh:127:19:function exp)'],
    msg: 'setWager',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v472, v469],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:131:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v472, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v474, v475], secs: v477, time: v476, didSend: v103, from: v473 } = txn1;
      
      sim_r.txns.push({
        amt: v474,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v474, v475], secs: v477, time: v476, didSend: v103, from: v473 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v484, time: v483, didSend: v112, from: v482 } = txn2;
  const v486 = stdlib.add(v474, v474);
  ;
  let v487 = stdlib.checkedBigNumberify('./index.rsh:145:83:decimal', stdlib.UInt_max, '0');
  let v488 = stdlib.checkedBigNumberify('./index.rsh:145:86:decimal', stdlib.UInt_max, '0');
  let v489 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v490 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v491 = v483;
  let v498 = v486;
  
  let txn3 = txn2;
  while (await (async () => {
    const v510 = stdlib.eq(v489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v510;})()) {
    const v517 = stdlib.safeAdd(v491, v475);
    stdlib.protect(ctc1, await interact.seePoints(v487, v488, v490), {
      at: './index.rsh:153:31:application',
      fs: ['at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:31:function exp)'],
      msg: 'seePoints',
      who: 'Alice'
      });
    
    const v525 = stdlib.protect(ctc0, await interact.getHand(), {
      at: './index.rsh:157:48:application',
      fs: ['at ./index.rsh:156:19:application call to [unknown function] (defined at: ./index.rsh:156:23:function exp)'],
      msg: 'getHand',
      who: 'Alice'
      });
    const v526 = stdlib.protect(ctc0, await interact.getGuess(v525), {
      at: './index.rsh:158:50:application',
      fs: ['at ./index.rsh:156:19:application call to [unknown function] (defined at: ./index.rsh:156:23:function exp)'],
      msg: 'getGuess',
      who: 'Alice'
      });
    const v527 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:160:70:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:156:19:application call to [unknown function] (defined at: ./index.rsh:156:23:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v528 = stdlib.digest([ctc0, ctc0], [v527, v525]);
    const v530 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:163:72:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:156:19:application call to [unknown function] (defined at: ./index.rsh:156:23:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v531 = stdlib.digest([ctc0, ctc0], [v530, v526]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v473, v474, v475, v482, v487, v488, v498, v517, v528],
      evt_cnt: 1,
      funcNum: 3,
      lct: v491,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:167:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v534], secs: v536, time: v535, didSend: v157, from: v533 } = txn4;
        
        ;
        const v544 = stdlib.safeAdd(v535, v475);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v517],
      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v473, v474, v475, v482, v487, v488, v498, v517],
        evt_cnt: 0,
        funcNum: 4,
        lct: v491,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v704, time: v703, didSend: v381, from: v702 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v482,
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
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v704, time: v703, didSend: v381, from: v702 } = txn5;
      ;
      const v705 = stdlib.addressEq(v473, v702);
      const v706 = stdlib.addressEq(v482, v702);
      const v707 = v705 ? true : v706;
      stdlib.assert(v707, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:168:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:123:35:application',
        fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:121:30:function exp)', 'at ./index.rsh:168:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v534], secs: v536, time: v535, didSend: v157, from: v533 } = txn4;
      ;
      const v537 = stdlib.addressEq(v473, v533);
      stdlib.assert(v537, {
        at: './index.rsh:167:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v544 = stdlib.safeAdd(v535, v475);
      const txn5 = await (ctc.sendrecv({
        args: [v473, v474, v475, v482, v487, v488, v498, v534, v544, v531],
        evt_cnt: 1,
        funcNum: 5,
        lct: v535,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:172:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v547], secs: v549, time: v548, didSend: v163, from: v546 } = txn5;
          
          ;
          const v557 = stdlib.safeAdd(v548, v475);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v544],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v473, v474, v475, v482, v487, v488, v498, v534, v544],
          evt_cnt: 0,
          funcNum: 6,
          lct: v535,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v686, time: v685, didSend: v347, from: v684 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v482,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v686, time: v685, didSend: v347, from: v684 } = txn6;
        ;
        const v687 = stdlib.addressEq(v473, v684);
        const v688 = stdlib.addressEq(v482, v684);
        const v689 = v687 ? true : v688;
        stdlib.assert(v689, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:173:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:123:35:application',
          fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:121:30:function exp)', 'at ./index.rsh:173:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v547], secs: v549, time: v548, didSend: v163, from: v546 } = txn5;
        ;
        const v550 = stdlib.addressEq(v473, v546);
        stdlib.assert(v550, {
          at: './index.rsh:172:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v557 = stdlib.safeAdd(v548, v475);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v557],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v473, v474, v475, v482, v487, v488, v498, v534, v547, v557],
            evt_cnt: 0,
            funcNum: 8,
            lct: v548,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v668, time: v667, didSend: v313, from: v666 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v473,
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
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v668, time: v667, didSend: v313, from: v666 } = txn7;
          ;
          const v669 = stdlib.addressEq(v473, v666);
          const v670 = stdlib.addressEq(v482, v666);
          const v671 = v669 ? true : v670;
          stdlib.assert(v671, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:182:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:123:35:application',
            fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:121:30:function exp)', 'at ./index.rsh:182:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v564, v565], secs: v567, time: v566, didSend: v175, from: v563 } = txn6;
          ;
          const v568 = stdlib.addressEq(v482, v563);
          stdlib.assert(v568, {
            at: './index.rsh:181:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v575 = stdlib.safeAdd(v566, v475);
          const txn7 = await (ctc.sendrecv({
            args: [v473, v474, v475, v482, v487, v488, v498, v534, v547, v564, v565, v575, v527, v525],
            evt_cnt: 2,
            funcNum: 9,
            lct: v566,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:192:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v580, v581], secs: v583, time: v582, didSend: v185, from: v579 } = txn7;
              
              ;
              const v593 = stdlib.safeAdd(v582, v475);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v575],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v473, v474, v475, v482, v487, v488, v498, v534, v547, v564, v565, v575],
              evt_cnt: 0,
              funcNum: 10,
              lct: v566,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v650, time: v649, didSend: v279, from: v648 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v482,
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
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v650, time: v649, didSend: v279, from: v648 } = txn8;
            ;
            const v651 = stdlib.addressEq(v473, v648);
            const v652 = stdlib.addressEq(v482, v648);
            const v653 = v651 ? true : v652;
            stdlib.assert(v653, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:193:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:123:35:application',
              fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:121:30:function exp)', 'at ./index.rsh:193:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v580, v581], secs: v583, time: v582, didSend: v185, from: v579 } = txn7;
            ;
            const v584 = stdlib.addressEq(v473, v579);
            stdlib.assert(v584, {
              at: './index.rsh:192:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v585 = stdlib.digest([ctc0, ctc0], [v580, v581]);
            const v586 = stdlib.digestEq(v534, v585);
            stdlib.assert(v586, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:194:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v593 = stdlib.safeAdd(v582, v475);
            const txn8 = await (ctc.sendrecv({
              args: [v473, v474, v475, v482, v487, v488, v498, v547, v564, v565, v581, v593, v530, v526],
              evt_cnt: 2,
              funcNum: 11,
              lct: v582,
              onlyIf: true,
              out_tys: [ctc0, ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:197:15:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v596, v597], secs: v599, time: v598, didSend: v195, from: v595 } = txn8;
                
                ;
                let v603;
                const v604 = stdlib.safeAdd(v581, v564);
                const v605 = stdlib.eq(v597, v565);
                if (v605) {
                  const v607 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                  const v608 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                  const v738 = v608 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v606 = v607 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v738;
                  const v609 = [v606, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v487, v488];
                  v603 = v609;
                  }
                else {
                  const v610 = stdlib.eq(v604, v597);
                  if (v610) {
                    const v611 = stdlib.safeAdd(v487, stdlib.checkedBigNumberify('./index.rsh:31:51:decimal', stdlib.UInt_max, '1'));
                    const v613 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                    const v614 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                    const v739 = v614 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v612 = v613 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v739;
                    const v615 = [v612, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v611, v488];
                    v603 = v615;
                    }
                  else {
                    const v616 = stdlib.eq(v604, v565);
                    if (v616) {
                      const v617 = stdlib.safeAdd(v488, stdlib.checkedBigNumberify('./index.rsh:35:47:decimal', stdlib.UInt_max, '1'));
                      const v619 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                      const v620 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                      const v740 = v620 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      const v618 = v619 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v740;
                      const v621 = [v618, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v487, v617];
                      v603 = v621;
                      }
                    else {
                      const v623 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                      const v624 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                      const v741 = v624 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      const v622 = v623 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v741;
                      const v625 = [v622, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v487, v488];
                      v603 = v625;
                      }
                    }
                  }
                const v626 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '0')];
                const v627 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '1')];
                const v628 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '2')];
                const v629 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '3')];
                const cv487 = v628;
                const cv488 = v629;
                const cv489 = v626;
                const cv490 = v627;
                const cv491 = v598;
                const cv498 = v498;
                
                await (async () => {
                  const v487 = cv487;
                  const v488 = cv488;
                  const v489 = cv489;
                  const v490 = cv490;
                  const v491 = cv491;
                  const v498 = cv498;
                  
                  if (await (async () => {
                    const v510 = stdlib.eq(v489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                    
                    return v510;})()) {
                    const v517 = stdlib.safeAdd(v491, v475);
                    sim_r.isHalt = false;
                    }
                  else {
                    const v720 = stdlib.eq(v489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                    const v723 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:207:14:decimal', stdlib.UInt_max, '2'), v474);
                    const v725 = v720 ? v473 : v482;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v725,
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
              timeoutAt: ['time', v593],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn8.didTimeout) {
              const txn9 = await (ctc.sendrecv({
                args: [v473, v474, v475, v482, v487, v488, v498, v547, v564, v565, v581, v593],
                evt_cnt: 0,
                funcNum: 12,
                lct: v582,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v632, time: v631, didSend: v245, from: v630 } = txn9;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v482,
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
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v632, time: v631, didSend: v245, from: v630 } = txn9;
              ;
              const v633 = stdlib.addressEq(v473, v630);
              const v634 = stdlib.addressEq(v482, v630);
              const v635 = v633 ? true : v634;
              stdlib.assert(v635, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:198:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:123:35:application',
                fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:121:30:function exp)', 'at ./index.rsh:198:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v596, v597], secs: v599, time: v598, didSend: v195, from: v595 } = txn8;
              ;
              const v600 = stdlib.addressEq(v473, v595);
              stdlib.assert(v600, {
                at: './index.rsh:197:15:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v601 = stdlib.digest([ctc0, ctc0], [v596, v597]);
              const v602 = stdlib.digestEq(v547, v601);
              stdlib.assert(v602, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:199:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              let v603;
              const v604 = stdlib.safeAdd(v581, v564);
              const v605 = stdlib.eq(v597, v565);
              if (v605) {
                const v607 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                const v608 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                const v738 = v608 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v606 = v607 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v738;
                const v609 = [v606, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v487, v488];
                v603 = v609;
                }
              else {
                const v610 = stdlib.eq(v604, v597);
                if (v610) {
                  const v611 = stdlib.safeAdd(v487, stdlib.checkedBigNumberify('./index.rsh:31:51:decimal', stdlib.UInt_max, '1'));
                  const v613 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                  const v614 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                  const v739 = v614 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v612 = v613 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v739;
                  const v615 = [v612, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v611, v488];
                  v603 = v615;
                  }
                else {
                  const v616 = stdlib.eq(v604, v565);
                  if (v616) {
                    const v617 = stdlib.safeAdd(v488, stdlib.checkedBigNumberify('./index.rsh:35:47:decimal', stdlib.UInt_max, '1'));
                    const v619 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                    const v620 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                    const v740 = v620 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v618 = v619 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v740;
                    const v621 = [v618, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v487, v617];
                    v603 = v621;
                    }
                  else {
                    const v623 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                    const v624 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                    const v741 = v624 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v622 = v623 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v741;
                    const v625 = [v622, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v487, v488];
                    v603 = v625;
                    }
                  }
                }
              const v626 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '0')];
              const v627 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '1')];
              const v628 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '2')];
              const v629 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '3')];
              const cv487 = v628;
              const cv488 = v629;
              const cv489 = v626;
              const cv490 = v627;
              const cv491 = v598;
              const cv498 = v498;
              
              v487 = cv487;
              v488 = cv488;
              v489 = cv489;
              v490 = cv490;
              v491 = cv491;
              v498 = cv498;
              
              txn3 = txn8;
              continue;}
            
            }
          
          }
        
        }
      
      }
    
    }
  const v720 = stdlib.eq(v489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v723 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:207:14:decimal', stdlib.UInt_max, '2'), v474);
  const v725 = v720 ? v473 : v482;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v489, v487, v488), {
    at: './index.rsh:212:28:application',
    fs: ['at ./index.rsh:211:9:application call to [unknown function] (defined at: ./index.rsh:211:27:function exp)'],
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
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v474, v475], secs: v477, time: v476, didSend: v103, from: v473 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v474), {
    at: './index.rsh:136:29:application',
    fs: ['at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v473, v474, v475],
    evt_cnt: 0,
    funcNum: 1,
    lct: v476,
    onlyIf: true,
    out_tys: [],
    pay: [v474, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v484, time: v483, didSend: v112, from: v482 } = txn2;
      
      const v486 = stdlib.add(v474, v474);
      sim_r.txns.push({
        amt: v474,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v487 = stdlib.checkedBigNumberify('./index.rsh:145:83:decimal', stdlib.UInt_max, '0');
      const v488 = stdlib.checkedBigNumberify('./index.rsh:145:86:decimal', stdlib.UInt_max, '0');
      const v489 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v490 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v491 = v483;
      const v498 = v486;
      
      if (await (async () => {
        const v510 = stdlib.eq(v489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v510;})()) {
        const v517 = stdlib.safeAdd(v491, v475);
        sim_r.isHalt = false;
        }
      else {
        const v720 = stdlib.eq(v489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v723 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:207:14:decimal', stdlib.UInt_max, '2'), v474);
        const v725 = v720 ? v473 : v482;
        sim_r.txns.push({
          kind: 'from',
          to: v725,
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
    tys: [ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v484, time: v483, didSend: v112, from: v482 } = txn2;
  const v486 = stdlib.add(v474, v474);
  ;
  let v487 = stdlib.checkedBigNumberify('./index.rsh:145:83:decimal', stdlib.UInt_max, '0');
  let v488 = stdlib.checkedBigNumberify('./index.rsh:145:86:decimal', stdlib.UInt_max, '0');
  let v489 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v490 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v491 = v483;
  let v498 = v486;
  
  let txn3 = txn2;
  while (await (async () => {
    const v510 = stdlib.eq(v489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v510;})()) {
    const v517 = stdlib.safeAdd(v491, v475);
    stdlib.protect(ctc1, await interact.seePoints(v487, v488, v490), {
      at: './index.rsh:153:31:application',
      fs: ['at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:31:function exp)'],
      msg: 'seePoints',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: ['time', v517],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v473, v474, v475, v482, v487, v488, v498, v517],
        evt_cnt: 0,
        funcNum: 4,
        lct: v491,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v704, time: v703, didSend: v381, from: v702 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v482,
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
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v704, time: v703, didSend: v381, from: v702 } = txn5;
      ;
      const v705 = stdlib.addressEq(v473, v702);
      const v706 = stdlib.addressEq(v482, v702);
      const v707 = v705 ? true : v706;
      stdlib.assert(v707, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:168:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:123:35:application',
        fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:121:30:function exp)', 'at ./index.rsh:168:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v534], secs: v536, time: v535, didSend: v157, from: v533 } = txn4;
      ;
      const v537 = stdlib.addressEq(v473, v533);
      stdlib.assert(v537, {
        at: './index.rsh:167:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v544 = stdlib.safeAdd(v535, v475);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc2],
        timeoutAt: ['time', v544],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v473, v474, v475, v482, v487, v488, v498, v534, v544],
          evt_cnt: 0,
          funcNum: 6,
          lct: v535,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v686, time: v685, didSend: v347, from: v684 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v482,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v686, time: v685, didSend: v347, from: v684 } = txn6;
        ;
        const v687 = stdlib.addressEq(v473, v684);
        const v688 = stdlib.addressEq(v482, v684);
        const v689 = v687 ? true : v688;
        stdlib.assert(v689, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:173:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:123:35:application',
          fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:121:30:function exp)', 'at ./index.rsh:173:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v547], secs: v549, time: v548, didSend: v163, from: v546 } = txn5;
        ;
        const v550 = stdlib.addressEq(v473, v546);
        stdlib.assert(v550, {
          at: './index.rsh:172:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v557 = stdlib.safeAdd(v548, v475);
        const v561 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:178:56:application',
          fs: ['at ./index.rsh:177:17:application call to [unknown function] (defined at: ./index.rsh:177:21:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v562 = stdlib.protect(ctc0, await interact.getGuess(v561), {
          at: './index.rsh:179:58:application',
          fs: ['at ./index.rsh:177:17:application call to [unknown function] (defined at: ./index.rsh:177:21:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn6 = await (ctc.sendrecv({
          args: [v473, v474, v475, v482, v487, v488, v498, v534, v547, v557, v561, v562],
          evt_cnt: 2,
          funcNum: 7,
          lct: v548,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:181:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v564, v565], secs: v567, time: v566, didSend: v175, from: v563 } = txn6;
            
            ;
            const v575 = stdlib.safeAdd(v566, v475);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v557],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v473, v474, v475, v482, v487, v488, v498, v534, v547, v557],
            evt_cnt: 0,
            funcNum: 8,
            lct: v548,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v668, time: v667, didSend: v313, from: v666 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v473,
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
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v668, time: v667, didSend: v313, from: v666 } = txn7;
          ;
          const v669 = stdlib.addressEq(v473, v666);
          const v670 = stdlib.addressEq(v482, v666);
          const v671 = v669 ? true : v670;
          stdlib.assert(v671, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:182:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:123:35:application',
            fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:121:30:function exp)', 'at ./index.rsh:182:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v564, v565], secs: v567, time: v566, didSend: v175, from: v563 } = txn6;
          ;
          const v568 = stdlib.addressEq(v482, v563);
          stdlib.assert(v568, {
            at: './index.rsh:181:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v575 = stdlib.safeAdd(v566, v475);
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 9,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v575],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v473, v474, v475, v482, v487, v488, v498, v534, v547, v564, v565, v575],
              evt_cnt: 0,
              funcNum: 10,
              lct: v566,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v650, time: v649, didSend: v279, from: v648 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v482,
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
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v650, time: v649, didSend: v279, from: v648 } = txn8;
            ;
            const v651 = stdlib.addressEq(v473, v648);
            const v652 = stdlib.addressEq(v482, v648);
            const v653 = v651 ? true : v652;
            stdlib.assert(v653, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:193:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:123:35:application',
              fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:121:30:function exp)', 'at ./index.rsh:193:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v580, v581], secs: v583, time: v582, didSend: v185, from: v579 } = txn7;
            ;
            const v584 = stdlib.addressEq(v473, v579);
            stdlib.assert(v584, {
              at: './index.rsh:192:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v585 = stdlib.digest([ctc0, ctc0], [v580, v581]);
            const v586 = stdlib.digestEq(v534, v585);
            stdlib.assert(v586, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:194:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v593 = stdlib.safeAdd(v582, v475);
            const txn8 = await (ctc.recv({
              didSend: false,
              evt_cnt: 2,
              funcNum: 11,
              out_tys: [ctc0, ctc0],
              timeoutAt: ['time', v593],
              waitIfNotPresent: false
              }));
            if (txn8.didTimeout) {
              const txn9 = await (ctc.sendrecv({
                args: [v473, v474, v475, v482, v487, v488, v498, v547, v564, v565, v581, v593],
                evt_cnt: 0,
                funcNum: 12,
                lct: v582,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v632, time: v631, didSend: v245, from: v630 } = txn9;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v482,
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
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v632, time: v631, didSend: v245, from: v630 } = txn9;
              ;
              const v633 = stdlib.addressEq(v473, v630);
              const v634 = stdlib.addressEq(v482, v630);
              const v635 = v633 ? true : v634;
              stdlib.assert(v635, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:198:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:123:35:application',
                fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:121:30:function exp)', 'at ./index.rsh:198:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v596, v597], secs: v599, time: v598, didSend: v195, from: v595 } = txn8;
              ;
              const v600 = stdlib.addressEq(v473, v595);
              stdlib.assert(v600, {
                at: './index.rsh:197:15:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v601 = stdlib.digest([ctc0, ctc0], [v596, v597]);
              const v602 = stdlib.digestEq(v547, v601);
              stdlib.assert(v602, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:199:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              let v603;
              const v604 = stdlib.safeAdd(v581, v564);
              const v605 = stdlib.eq(v597, v565);
              if (v605) {
                const v607 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                const v608 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                const v738 = v608 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v606 = v607 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v738;
                const v609 = [v606, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v487, v488];
                v603 = v609;
                }
              else {
                const v610 = stdlib.eq(v604, v597);
                if (v610) {
                  const v611 = stdlib.safeAdd(v487, stdlib.checkedBigNumberify('./index.rsh:31:51:decimal', stdlib.UInt_max, '1'));
                  const v613 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                  const v614 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                  const v739 = v614 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v612 = v613 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v739;
                  const v615 = [v612, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v611, v488];
                  v603 = v615;
                  }
                else {
                  const v616 = stdlib.eq(v604, v565);
                  if (v616) {
                    const v617 = stdlib.safeAdd(v488, stdlib.checkedBigNumberify('./index.rsh:35:47:decimal', stdlib.UInt_max, '1'));
                    const v619 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                    const v620 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                    const v740 = v620 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v618 = v619 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v740;
                    const v621 = [v618, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v487, v617];
                    v603 = v621;
                    }
                  else {
                    const v623 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:13:26:decimal', stdlib.UInt_max, '3'));
                    const v624 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:15:31:decimal', stdlib.UInt_max, '3'));
                    const v741 = v624 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v622 = v623 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v741;
                    const v625 = [v622, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v487, v488];
                    v603 = v625;
                    }
                  }
                }
              const v626 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '0')];
              const v627 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '1')];
              const v628 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '2')];
              const v629 = v603[stdlib.checkedBigNumberify('./index.rsh:201:9:array', stdlib.UInt_max, '3')];
              const cv487 = v628;
              const cv488 = v629;
              const cv489 = v626;
              const cv490 = v627;
              const cv491 = v598;
              const cv498 = v498;
              
              v487 = cv487;
              v488 = cv488;
              v489 = cv489;
              v490 = cv490;
              v491 = cv491;
              v498 = cv498;
              
              txn3 = txn8;
              continue;}
            
            }
          
          }
        
        }
      
      }
    
    }
  const v720 = stdlib.eq(v489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v723 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:207:14:decimal', stdlib.UInt_max, '2'), v474);
  const v725 = v720 ? v473 : v482;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v489, v487, v488), {
    at: './index.rsh:212:28:application',
    fs: ['at ./index.rsh:211:9:application call to [unknown function] (defined at: ./index.rsh:211:27:function exp)'],
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
  appApproval: `ByAUAAEIYAMgKAxQWAIKBAaIAagBoAG4AQVoJgQBAAEBAAgAAAAAAAAAASI1ADEYQQeHKmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEHDEAD+0khCwxAAf5JgQsMQAGkSSEHDEAAViEHEkQhBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABMqrzjewMgY0AyEQWw9ENANXACAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgaeSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSlcAIDX/IQhbNf4hCVs1/YGQAVs1/Ek1BUkiWzX7JFs1+oAEJmR71jT7FlA0+hZQsDIGNAMhEFsMRDT/MQASRDQDV2ggNPsWNPoWUAESRDQDgZgBWzQDIQ5bCDX4NPo0/BJBACAjIQo0/SEEEk0iNP4hBBJNFitQNP4WUDT9FlA1+UIAezT4NPoSQQAjIyEKNP0hBBJNIjT+IQQSTRYkr1A0/iMIFlA0/RZQNflCAFA0+DT8EkEAKyMhCjT9IQQSTSI0/iEEEk0WgAgAAAAAAAAAAlA0/hZQNP0jCBZQNflCAB0jIQo0/SEEEk0iNP4hBBJNFitQNP4WUDT9FlA1+TT/NAMhBVs0AyEGWzQDVzAgNPmBEFs0+YEYWzT5Ils0+SRbMgY0AyVbQgToSCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AE00RzI7AyBjQDIRFbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCBQRJJAxAATBJgQkMQADXSCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSlcAIDX/IQVbNf4hBls1/VcwIDX8IQhbNfshCVs1+iVbNflXiCA1+CEPWzX3gbABWzX2STUFSSJbNfUkWzX0gASp2U09NPUWUDT0FlCwMgY0AyERWwxENP8xABJENANXaCA09RY09BZQARJEMgY0/Qg18zT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlA0+FA09xZQNPYWUDT0FlA08xZQKEsBVwB/ZylLAVd/KWdIIQc1ATIGNQJCBDxIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABBf82y6wMgY0AyEPWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgPOSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8hBVs1/iEGWzX9VzAgNfwhCFs1+yEJWzX6JVs1+VdoIDX4V4ggNfdJNQVJIls19iRbNfWABIJre3Y09hZQNPUWULAyBjQDIQ9bDEQ0/DEAEkQyBjT9CDX0NP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4UDT3UDT2FlA09RZQNPQWUChLAVcAf2cpSwFXf0FnSCELNQEyBjUCQgMqSSEMDEABV0khEgxAAQBJIQ0MQABTSCENNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEYbSsDLAyBjQDIQ5bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCAqZIIQ00ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yEFWzX+IQZbNf1XMCA1/CEIWzX7IQlbNfolWzX5V2ggNfhJNQU194AEzaboyzT3ULAyBjQDIQ5bDEQ0/zEAEkQyBjT9CDX2NP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4UDT3UDT2FlAoSwFXAH9nKUsBV38xZ0gkNQEyBjUCQgIcSCEMNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEkSc087AyBjQDIRNbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCAbBJIwxAAOdJIQQMQACcSCEMNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8hBVs1/iEGWzX9VzAgNfwhCFs1+yEJWzX6JVs1+Uk1BTX4gAQT7upRNPhQsDIGNAMhE1sMRDT/MQASRDIGNP0INfc0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQNPhQNPcWUChLAVcAf2cpSwFXfxFnSCENNQEyBjUCQgEjIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQVbNf+ABJqLkXSwNP+IAUw0A1cAIDT/NAMhBlsxACIiIyMyBjT/SQhCAFRIgaCNBogBKSI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULA0/4gA+TEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCAIs1/zX+Nf01/DX7Nfo1+TX4Nfc19jT8IxJBADc0/jT4CDX1NPY09xZQNPgWUDT5UDT6FlA0+xZQNP8WUDT1FlAoSwFXAHBnSCEMNQEyBjUCQgA5sSKyASEKNPcLsggjshA0+TT2NPwiEk2yB7NCAAAxGSESEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 192,
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
                "name": "v474",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v475",
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
                "name": "v474",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v475",
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
                "name": "v596",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v597",
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
                "name": "v534",
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
                "name": "v547",
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
                "name": "v564",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v565",
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
                "name": "v580",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v581",
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
                "name": "v596",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v597",
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
                "name": "v534",
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
                "name": "v547",
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
                "name": "v564",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v565",
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
                "name": "v580",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v581",
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
  Bytecode: `0x6080604052604051620028c5380380620028c5833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b6125e380620002e26000396000f3fe6080604052600436106100d55760003560e01c80638323075711610079578063c798003711610056578063c7980037146101bf578063e00acef1146101d2578063e533a29d146101e5578063f4cedab0146101f857005b80638323075714610174578063a7661d5414610189578063ab53f2c61461019c57005b80632c10a159116100b25780632c10a15914610128578063422eb85c1461013b578063552d7b8e1461014e57806366ad16d01461016157005b806311faee8c146100de5780631e93b0f1146100f1578063273206b81461011557005b366100dc57005b005b6100dc6100ec366004611ee6565b61020b565b3480156100fd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc610123366004611f1b565b6103c2565b6100dc610136366004611ee6565b6106ba565b6100dc610149366004611f1b565b610850565b6100dc61015c366004611ee6565b610acd565b6100dc61016f366004611f1b565b610d06565b34801561018057600080fd5b50600154610102565b6100dc610197366004611ee6565b611104565b3480156101a857600080fd5b506101b161125e565b60405161010c929190611f37565b6100dc6101cd366004611ee6565b6112fb565b6100dc6101e0366004611ee6565b611456565b6100dc6101f3366004611ee6565b6115b1565b6100dc610206366004611ee6565b611749565b61021b600c60005414603c6119d6565b6102358135158061022e57506001548235145b603d6119d6565b60008080556002805461024790611f94565b80601f016020809104026020016040519081016040528092919081815260200182805461027390611f94565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b50505050508060200190518101906102d8919061212c565b90506102ed816101600151431015603e6119d6565b7f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf338360405161031e929190612149565b60405180910390a16103323415603a6119d6565b8051610366906001600160a01b0316331461035c5760608201516001600160a01b0316331461035f565b60015b603b6119d6565b80606001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f193505050501580156103a7573d6000803e3d6000fd5b50600080805560018190556103be90600290611c8d565b5050565b6103d2600a60005414602c6119d6565b6103ec813515806103e557506001548235145b602d6119d6565b6000808055600280546103fe90611f94565b80601f016020809104026020016040519081016040528092919081815260200182805461042a90611f94565b80156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b505050505080602001905181019061048f919061212c565b90506104a76040518060200160405280600081525090565b6104b98261016001514310602e6119d6565b7f61a975c2eb129c07d71a871df28eb78724f84a0b02b4a03b148b42a7224a9a2833846040516104ea929190612186565b60405180910390a16104fe341560296119d6565b8151610516906001600160a01b03163314602a6119d6565b604080516105629161053c91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360e0015114602b6119d6565b6105704383604001516119fc565b8160000181815250506105ef60405180610180016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401526101008086015160e08501526101208087015191850191909152610140808701519185019190915286830135908401528351610160840152600c60005543600155905161068f91839101612248565b604051602081830303815290604052600290805190602001906106b3929190611cca565b5050505050565b6106ca60016000541460096119d6565b6106e4813515806106dd57506001548235145b600a6119d6565b6000808055600280546106f690611f94565b80601f016020809104026020016040519081016040528092919081815260200182805461072290611f94565b801561076f5780601f106107445761010080835404028352916020019161076f565b820191906000526020600020905b81548152906001019060200180831161075257829003601f168201915b50505050508060200190518101906107879190612257565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516107ba929190612149565b60405180910390a16107d38160200151341460086119d6565b6107db611d4e565b815181516001600160a01b0390911690526020808301805183518301526040808501518451820152835133606091820152838501805160009081905281519095019490945283516001920182905283510152905143608090910152518001602082015160a0015261084b81611a4f565b505050565b61086060086000541460216119d6565b61087a8135158061087357506001548235145b60226119d6565b60008080556002805461088c90611f94565b80601f01602080910402602001604051908101604052809291908181526020018280546108b890611f94565b80156109055780601f106108da57610100808354040283529160200191610905565b820191906000526020600020905b8154815290600101906020018083116108e857829003601f168201915b505050505080602001905181019061091d91906122c6565b90506109356040518060200160405280600081525090565b610947826101200151431060236119d6565b7f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa3384604051610978929190612186565b60405180910390a161098c3415601f6119d6565b60608201516109a7906001600160a01b0316331460206119d6565b6109b54383604001516119fc565b816000018181525050610a3460405180610180016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152610100808601519084015285810135610120840152858201356101408401528351610160840152600a60005543600155905161068f91839101612248565b610add60066000541460176119d6565b610af781351580610af057506001548235145b60186119d6565b600080805560028054610b0990611f94565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3590611f94565b8015610b825780601f10610b5757610100808354040283529160200191610b82565b820191906000526020600020905b815481529060010190602001808311610b6557829003601f168201915b5050505050806020019051810190610b9a919061235b565b9050610bb26040518060200160405280600081525090565b610bc4826101000151431060196119d6565b7f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d33384604051610bf59291906123e4565b60405180910390a1610c09341560156119d6565b8151610c21906001600160a01b0316331460166119d6565b610c2f4383604001516119fc565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600860005543600155905161068f9183910161240b565b610d16600c6000541460376119d6565b610d3081351580610d2957506001548235145b60386119d6565b600080805560028054610d4290611f94565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6e90611f94565b8015610dbb5780601f10610d9057610100808354040283529160200191610dbb565b820191906000526020600020905b815481529060010190602001808311610d9e57829003601f168201915b5050505050806020019051810190610dd3919061212c565b9050610ddd611dbc565b610def826101600151431060396119d6565b7fde56afa74c9f6c9211234ba8c87db17d1f2d7f456e99f217651173a9368d4d463384604051610e20929190612186565b60405180910390a1610e34341560346119d6565b8151610e4c906001600160a01b0316331460356119d6565b60408051610e9891610e7291602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360e001511460366119d6565b610eac8261014001518361010001516119fc565b602082015261012082015160408401351415610f1e576003826080015114610ee85760038260a0015114610ee1576001610eeb565b6002610eeb565b60005b604080830180519290925281516001602090910152608084015182519091015260a083015181516060015251815261106e565b602081015160408401351415610f9b576003826080015114610f545760038260a0015114610f4d576001610f57565b6002610f57565b60005b606082018051919091525160006020909101526080820151610f7a9060016119fc565b606080830180516040019290925260a084015182519091015251815261106e565b81610120015181602001511415611018576003826080015114610fd25760038260a0015114610fcb576001610fd5565b6002610fd5565b60005b60808083018051929092528151600260209091015283015190516040015260a08201516110039060016119fc565b6080820180516060019190915251815261106e565b600382608001511461103e5760038260a0015114611037576001611041565b6002611041565b60005b60a08083018051929092528151600160209091015260808401518251604001528301518151606001525181525b611076611d4e565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169381019390935284518101518285018051919091528551840151815184015285515181519092019190915284519091015181519092019190915280514360809091015260c0840151905160a001526110fe81611a4f565b50505050565b61111460046000541460126119d6565b61112e8135158061112757506001548235145b60136119d6565b60008080556002805461114090611f94565b80601f016020809104026020016040519081016040528092919081815260200182805461116c90611f94565b80156111b95780601f1061118e576101008083540402835291602001916111b9565b820191906000526020600020905b81548152906001019060200180831161119c57829003601f168201915b50505050508060200190518101906111d19190612492565b90506111e58160e0015143101560146119d6565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051611216929190612149565b60405180910390a161122a341560106119d6565b8051610366906001600160a01b031633146112545760608201516001600160a01b03163314611257565b60015b60116119d6565b60006060600054600280805461127390611f94565b80601f016020809104026020016040519081016040528092919081815260200182805461129f90611f94565b80156112ec5780601f106112c1576101008083540402835291602001916112ec565b820191906000526020600020905b8154815290600101906020018083116112cf57829003601f168201915b50505050509050915091509091565b61130b600660005414601c6119d6565b6113258135158061131e57506001548235145b601d6119d6565b60008080556002805461133790611f94565b80601f016020809104026020016040519081016040528092919081815260200182805461136390611f94565b80156113b05780601f10611385576101008083540402835291602001916113b0565b820191906000526020600020905b81548152906001019060200180831161139357829003601f168201915b50505050508060200190518101906113c8919061235b565b90506113dd816101000151431015601e6119d6565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae338360405161140e929190612149565b60405180910390a16114223415601a6119d6565b8051610366906001600160a01b0316331461144c5760608201516001600160a01b0316331461144f565b60015b601b6119d6565b611466600a6000541460316119d6565b6114808135158061147957506001548235145b60326119d6565b60008080556002805461149290611f94565b80601f01602080910402602001604051908101604052809291908181526020018280546114be90611f94565b801561150b5780601f106114e05761010080835404028352916020019161150b565b820191906000526020600020905b8154815290600101906020018083116114ee57829003601f168201915b5050505050806020019051810190611523919061212c565b905061153881610160015143101560336119d6565b7f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a3383604051611569929190612149565b60405180910390a161157d3415602f6119d6565b8051610366906001600160a01b031633146115a75760608201516001600160a01b031633146115aa565b60015b60306119d6565b6115c160086000541460266119d6565b6115db813515806115d457506001548235145b60276119d6565b6000808055600280546115ed90611f94565b80601f016020809104026020016040519081016040528092919081815260200182805461161990611f94565b80156116665780601f1061163b57610100808354040283529160200191611666565b820191906000526020600020905b81548152906001019060200180831161164957829003601f168201915b505050505080602001905181019061167e91906122c6565b905061169381610120015143101560286119d6565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633836040516116c4929190612149565b60405180910390a16116d8341560246119d6565b805161170c906001600160a01b031633146117025760608201516001600160a01b03163314611705565b60015b60256119d6565b805160c08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103a7573d6000803e3d6000fd5b611759600460005414600d6119d6565b6117738135158061176c57506001548235145b600e6119d6565b60008080556002805461178590611f94565b80601f01602080910402602001604051908101604052809291908181526020018280546117b190611f94565b80156117fe5780601f106117d3576101008083540402835291602001916117fe565b820191906000526020600020905b8154815290600101906020018083116117e157829003601f168201915b50505050508060200190518101906118169190612492565b905061182e6040518060200160405280600081525090565b61183f8260e001514310600f6119d6565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc133846040516118709291906123e4565b60405180910390a16118843415600b6119d6565b815161189c906001600160a01b03163314600c6119d6565b6118aa4383604001516119fc565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600660005543600155905161068f9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b816103be5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082611a098382612554565b9150811015611a495760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016119f3565b92915050565b60408051602081019091526000815260018260200151604001511415611bca57611a898260200151608001518360000151604001516119fc565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528251516001600160a01b0390811682528351602090810151818401528451604090810151818501528551606090810151909316928401929092528085018051516080850152805182015160a0808601919091529051015160c0840152835160e08401526004600055436001559051611ba69183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906110fe929190611cca565b60208201516040015115611be357815160600151611be7565b8151515b6001600160a01b03166108fc611c066002856000015160200151611c2e565b6040518115909202916000818181858888f193505050501580156103a7573d6000803e3d6000fd5b6000811580611c5257508282611c44818361256c565b9250611c50908361258b565b145b611a495760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016119f3565b508054611c9990611f94565b6000825580601f10611ca9575050565b601f016020900490600052602060002090810190611cc79190611eb9565b50565b828054611cd690611f94565b90600052602060002090601f016020900481019282611cf85760008555611d3e565b82601f10611d1157805160ff1916838001178555611d3e565b82800160010185558215611d3e579182015b82811115611d3e578251825591602001919060010190611d23565b50611d4a929150611eb9565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611db76040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b905290565b6040518060c00160405280611df26040518060800160405280600081526020016000815260200160008152602001600081525090565b815260200160008152602001611e296040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001611e596040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001611e896040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001611db76040518060800160405280600081526020016000815260200160008152602001600081525090565b5b80821115611d4a5760008155600101611eba565b600060408284031215611ee057600080fd5b50919050565b600060408284031215611ef857600080fd5b611f028383611ece565b9392505050565b600060608284031215611ee057600080fd5b600060608284031215611f2d57600080fd5b611f028383611f09565b82815260006020604081840152835180604085015260005b81811015611f6b57858101830151858201606001528201611f4f565b81811115611f7d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611fa857607f821691505b60208210811415611ee057634e487b7160e01b600052602260045260246000fd5b604051610180810167ffffffffffffffff81118282101715611ffb57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610140810167ffffffffffffffff81118282101715611ffb57634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715611ffb57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461207c57600080fd5b919050565b6000610180828403121561209457600080fd5b61209c611fc9565b90506120a782612065565b815260208201516020820152604082015160408201526120c960608301612065565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525061014080830151818301525061016080830151818301525092915050565b6000610180828403121561213f57600080fd5b611f028383612081565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461217757600080fd5b80604085015250509392505050565b6001600160a01b038316815260808101611f0260208301848035825260208082013590830152604090810135910152565b80516001600160a01b03168252602081015160208301526040810151604083015260608101516121f260608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e0808201519083015261010080820151908301526101208082015190830152610140808201519083015261016090810151910152565b6101808101611a4982846121b7565b60006060828403121561226957600080fd5b6040516060810181811067ffffffffffffffff8211171561229a57634e487b7160e01b600052604160045260246000fd5b6040526122a683612065565b815260208301516020820152604083015160408201528091505092915050565b600061014082840312156122d957600080fd5b6122e1612001565b6122ea83612065565b8152602083015160208201526040830151604082015261230c60608401612065565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b6000610120828403121561236e57600080fd5b612376612033565b61237f83612065565b815260208301516020820152604083015160408201526123a160608401612065565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6001600160a01b038316815260608101611f02602083018480358252602090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161244b60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b60006101008083850312156124a657600080fd5b6040519081019067ffffffffffffffff821181831017156124d757634e487b7160e01b600052604160045260246000fd5b816040526124e484612065565b8152602084015160208201526040840151604082015261250660608501612065565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156125675761256761253e565b500190565b60008160001904831182151516156125865761258661253e565b500290565b6000826125a857634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220c1b4b1163fc5aef305fbcf927850c9bf30afbf845808d36006741cd2e4d12cce64736f6c634300080c0033`,
  BytecodeLen: 10437,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:133:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:209:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:150:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:168:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:169:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:173:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:174:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:182:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:183:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:193:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:195:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:198:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
