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
  
  
  const v359 = stdlib.protect(ctc0, await interact.setWager(), {
    at: './index.rsh:73:51:application',
    fs: ['at ./index.rsh:72:15:application call to [unknown function] (defined at: ./index.rsh:72:19:function exp)'],
    msg: 'setWager',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v359],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:75:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v359, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v361], secs: v363, time: v362, didSend: v29, from: v360 } = txn1;
      
      sim_r.txns.push({
        amt: v361,
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
  const {data: [v361], secs: v363, time: v362, didSend: v29, from: v360 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v370, time: v369, didSend: v38, from: v368 } = txn2;
  const v372 = stdlib.add(v361, v361);
  ;
  let v373 = stdlib.checkedBigNumberify('./index.rsh:86:83:decimal', stdlib.UInt_max, '0');
  let v374 = stdlib.checkedBigNumberify('./index.rsh:86:86:decimal', stdlib.UInt_max, '0');
  let v375 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v377 = v369;
  let v384 = v372;
  
  let txn3 = txn2;
  while (await (async () => {
    const v396 = stdlib.eq(v375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v396;})()) {
    const v403 = stdlib.safeAdd(v377, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
    stdlib.protect(ctc1, await interact.seePoints(v373, v374), {
      at: './index.rsh:93:31:application',
      fs: ['at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:31:function exp)'],
      msg: 'seePoints',
      who: 'Alice'
      });
    
    const v411 = stdlib.protect(ctc0, await interact.getHand(), {
      at: './index.rsh:97:48:application',
      fs: ['at ./index.rsh:96:19:application call to [unknown function] (defined at: ./index.rsh:96:23:function exp)'],
      msg: 'getHand',
      who: 'Alice'
      });
    const v412 = stdlib.protect(ctc0, await interact.getGuess(v411), {
      at: './index.rsh:98:50:application',
      fs: ['at ./index.rsh:96:19:application call to [unknown function] (defined at: ./index.rsh:96:23:function exp)'],
      msg: 'getGuess',
      who: 'Alice'
      });
    const v413 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:100:70:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:96:19:application call to [unknown function] (defined at: ./index.rsh:96:23:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v414 = stdlib.digest([ctc0, ctc0], [v413, v411]);
    const v416 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:103:72:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:96:19:application call to [unknown function] (defined at: ./index.rsh:96:23:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v417 = stdlib.digest([ctc0, ctc0], [v416, v412]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v360, v361, v368, v373, v374, v384, v403, v414],
      evt_cnt: 1,
      funcNum: 3,
      lct: v377,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:107:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v420], secs: v422, time: v421, didSend: v83, from: v419 } = txn4;
        
        ;
        const v430 = stdlib.safeAdd(v421, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v403],
      tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v360, v361, v368, v373, v374, v384, v403],
        evt_cnt: 0,
        funcNum: 4,
        lct: v377,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v590, time: v589, didSend: v307, from: v588 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v368,
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
      const {data: [], secs: v590, time: v589, didSend: v307, from: v588 } = txn5;
      ;
      const v591 = stdlib.addressEq(v360, v588);
      const v592 = stdlib.addressEq(v368, v588);
      const v593 = v591 ? true : v592;
      stdlib.assert(v593, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:108:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:68:35:application',
        fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:108:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v420], secs: v422, time: v421, didSend: v83, from: v419 } = txn4;
      ;
      const v423 = stdlib.addressEq(v360, v419);
      stdlib.assert(v423, {
        at: './index.rsh:107:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v430 = stdlib.safeAdd(v421, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
      const txn5 = await (ctc.sendrecv({
        args: [v360, v361, v368, v373, v374, v384, v420, v430, v417],
        evt_cnt: 1,
        funcNum: 5,
        lct: v421,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:112:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v433], secs: v435, time: v434, didSend: v89, from: v432 } = txn5;
          
          ;
          const v443 = stdlib.safeAdd(v434, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v430],
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v360, v361, v368, v373, v374, v384, v420, v430],
          evt_cnt: 0,
          funcNum: 6,
          lct: v421,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v572, time: v571, didSend: v273, from: v570 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v368,
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
        const {data: [], secs: v572, time: v571, didSend: v273, from: v570 } = txn6;
        ;
        const v573 = stdlib.addressEq(v360, v570);
        const v574 = stdlib.addressEq(v368, v570);
        const v575 = v573 ? true : v574;
        stdlib.assert(v575, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:113:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:68:35:application',
          fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:113:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v433], secs: v435, time: v434, didSend: v89, from: v432 } = txn5;
        ;
        const v436 = stdlib.addressEq(v360, v432);
        stdlib.assert(v436, {
          at: './index.rsh:112:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v443 = stdlib.safeAdd(v434, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v443],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v360, v361, v368, v373, v374, v384, v420, v433, v443],
            evt_cnt: 0,
            funcNum: 8,
            lct: v434,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v554, time: v553, didSend: v239, from: v552 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v360,
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
          const {data: [], secs: v554, time: v553, didSend: v239, from: v552 } = txn7;
          ;
          const v555 = stdlib.addressEq(v360, v552);
          const v556 = stdlib.addressEq(v368, v552);
          const v557 = v555 ? true : v556;
          stdlib.assert(v557, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:122:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:68:35:application',
            fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:122:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v450, v451], secs: v453, time: v452, didSend: v101, from: v449 } = txn6;
          ;
          const v454 = stdlib.addressEq(v368, v449);
          stdlib.assert(v454, {
            at: './index.rsh:121:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v461 = stdlib.safeAdd(v452, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
          const txn7 = await (ctc.sendrecv({
            args: [v360, v361, v368, v373, v374, v384, v420, v433, v450, v451, v461, v413, v411],
            evt_cnt: 2,
            funcNum: 9,
            lct: v452,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:132:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v466, v467], secs: v469, time: v468, didSend: v111, from: v465 } = txn7;
              
              ;
              const v479 = stdlib.safeAdd(v468, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v461],
            tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v360, v361, v368, v373, v374, v384, v420, v433, v450, v451, v461],
              evt_cnt: 0,
              funcNum: 10,
              lct: v452,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v536, time: v535, didSend: v205, from: v534 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v368,
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
            const {data: [], secs: v536, time: v535, didSend: v205, from: v534 } = txn8;
            ;
            const v537 = stdlib.addressEq(v360, v534);
            const v538 = stdlib.addressEq(v368, v534);
            const v539 = v537 ? true : v538;
            stdlib.assert(v539, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:133:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:68:35:application',
              fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:133:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v466, v467], secs: v469, time: v468, didSend: v111, from: v465 } = txn7;
            ;
            const v470 = stdlib.addressEq(v360, v465);
            stdlib.assert(v470, {
              at: './index.rsh:132:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v471 = stdlib.digest([ctc0, ctc0], [v466, v467]);
            const v472 = stdlib.digestEq(v420, v471);
            stdlib.assert(v472, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:134:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v479 = stdlib.safeAdd(v468, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
            const txn8 = await (ctc.sendrecv({
              args: [v360, v361, v368, v373, v374, v384, v433, v450, v451, v467, v479, v416, v412],
              evt_cnt: 2,
              funcNum: 11,
              lct: v468,
              onlyIf: true,
              out_tys: [ctc0, ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:137:15:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v482, v483], secs: v485, time: v484, didSend: v121, from: v481 } = txn8;
                
                ;
                let v489;
                const v490 = stdlib.safeAdd(v467, v450);
                const v491 = stdlib.eq(v483, v451);
                if (v491) {
                  const v493 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                  const v494 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                  const v622 = v494 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v492 = v493 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v622;
                  const v495 = [v492, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v373, v374];
                  v489 = v495;
                  }
                else {
                  const v496 = stdlib.eq(v490, v483);
                  if (v496) {
                    const v497 = stdlib.safeAdd(v373, stdlib.checkedBigNumberify('./index.rsh:28:51:decimal', stdlib.UInt_max, '1'));
                    const v499 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                    const v500 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                    const v623 = v500 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v498 = v499 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v623;
                    const v501 = [v498, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v497, v374];
                    v489 = v501;
                    }
                  else {
                    const v502 = stdlib.eq(v490, v451);
                    if (v502) {
                      const v503 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:32:47:decimal', stdlib.UInt_max, '1'));
                      const v505 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                      const v506 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                      const v624 = v506 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      const v504 = v505 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v624;
                      const v507 = [v504, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v373, v503];
                      v489 = v507;
                      }
                    else {
                      const v509 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                      const v510 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                      const v625 = v510 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      const v508 = v509 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v625;
                      const v511 = [v508, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v373, v374];
                      v489 = v511;
                      }
                    }
                  }
                const v512 = v489[stdlib.checkedBigNumberify('./index.rsh:141:9:array', stdlib.UInt_max, '0')];
                const v514 = v489[stdlib.checkedBigNumberify('./index.rsh:141:9:array', stdlib.UInt_max, '2')];
                const v515 = v489[stdlib.checkedBigNumberify('./index.rsh:141:9:array', stdlib.UInt_max, '3')];
                const cv373 = v514;
                const cv374 = v515;
                const cv375 = v512;
                const cv377 = v484;
                const cv384 = v384;
                
                await (async () => {
                  const v373 = cv373;
                  const v374 = cv374;
                  const v375 = cv375;
                  const v377 = cv377;
                  const v384 = cv384;
                  
                  if (await (async () => {
                    const v396 = stdlib.eq(v375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                    
                    return v396;})()) {
                    const v403 = stdlib.safeAdd(v377, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
                    sim_r.isHalt = false;
                    }
                  else {
                    const v606 = stdlib.eq(v375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                    const v609 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:147:14:decimal', stdlib.UInt_max, '2'), v361);
                    const v611 = v606 ? v360 : v368;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v611,
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
              timeoutAt: ['time', v479],
              tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn8.didTimeout) {
              const txn9 = await (ctc.sendrecv({
                args: [v360, v361, v368, v373, v374, v384, v433, v450, v451, v467, v479],
                evt_cnt: 0,
                funcNum: 12,
                lct: v468,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v518, time: v517, didSend: v171, from: v516 } = txn9;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v368,
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
              const {data: [], secs: v518, time: v517, didSend: v171, from: v516 } = txn9;
              ;
              const v519 = stdlib.addressEq(v360, v516);
              const v520 = stdlib.addressEq(v368, v516);
              const v521 = v519 ? true : v520;
              stdlib.assert(v521, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:138:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:68:35:application',
                fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:138:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v482, v483], secs: v485, time: v484, didSend: v121, from: v481 } = txn8;
              ;
              const v486 = stdlib.addressEq(v360, v481);
              stdlib.assert(v486, {
                at: './index.rsh:137:15:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v487 = stdlib.digest([ctc0, ctc0], [v482, v483]);
              const v488 = stdlib.digestEq(v433, v487);
              stdlib.assert(v488, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:139:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              let v489;
              const v490 = stdlib.safeAdd(v467, v450);
              const v491 = stdlib.eq(v483, v451);
              if (v491) {
                const v493 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                const v494 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                const v622 = v494 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v492 = v493 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v622;
                const v495 = [v492, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v373, v374];
                v489 = v495;
                }
              else {
                const v496 = stdlib.eq(v490, v483);
                if (v496) {
                  const v497 = stdlib.safeAdd(v373, stdlib.checkedBigNumberify('./index.rsh:28:51:decimal', stdlib.UInt_max, '1'));
                  const v499 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                  const v500 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                  const v623 = v500 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v498 = v499 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v623;
                  const v501 = [v498, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v497, v374];
                  v489 = v501;
                  }
                else {
                  const v502 = stdlib.eq(v490, v451);
                  if (v502) {
                    const v503 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:32:47:decimal', stdlib.UInt_max, '1'));
                    const v505 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                    const v506 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                    const v624 = v506 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v504 = v505 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v624;
                    const v507 = [v504, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v373, v503];
                    v489 = v507;
                    }
                  else {
                    const v509 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                    const v510 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                    const v625 = v510 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v508 = v509 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v625;
                    const v511 = [v508, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v373, v374];
                    v489 = v511;
                    }
                  }
                }
              const v512 = v489[stdlib.checkedBigNumberify('./index.rsh:141:9:array', stdlib.UInt_max, '0')];
              const v514 = v489[stdlib.checkedBigNumberify('./index.rsh:141:9:array', stdlib.UInt_max, '2')];
              const v515 = v489[stdlib.checkedBigNumberify('./index.rsh:141:9:array', stdlib.UInt_max, '3')];
              const cv373 = v514;
              const cv374 = v515;
              const cv375 = v512;
              const cv377 = v484;
              const cv384 = v384;
              
              v373 = cv373;
              v374 = cv374;
              v375 = cv375;
              v377 = cv377;
              v384 = cv384;
              
              txn3 = txn8;
              continue;}
            
            }
          
          }
        
        }
      
      }
    
    }
  const v606 = stdlib.eq(v375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v609 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:147:14:decimal', stdlib.UInt_max, '2'), v361);
  const v611 = v606 ? v360 : v368;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v375, v373, v374), {
    at: './index.rsh:152:28:application',
    fs: ['at ./index.rsh:151:9:application call to [unknown function] (defined at: ./index.rsh:151:27:function exp)'],
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
  const {data: [v361], secs: v363, time: v362, didSend: v29, from: v360 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v361), {
    at: './index.rsh:80:29:application',
    fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v360, v361],
    evt_cnt: 0,
    funcNum: 1,
    lct: v362,
    onlyIf: true,
    out_tys: [],
    pay: [v361, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v370, time: v369, didSend: v38, from: v368 } = txn2;
      
      const v372 = stdlib.add(v361, v361);
      sim_r.txns.push({
        amt: v361,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v373 = stdlib.checkedBigNumberify('./index.rsh:86:83:decimal', stdlib.UInt_max, '0');
      const v374 = stdlib.checkedBigNumberify('./index.rsh:86:86:decimal', stdlib.UInt_max, '0');
      const v375 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v377 = v369;
      const v384 = v372;
      
      if (await (async () => {
        const v396 = stdlib.eq(v375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v396;})()) {
        const v403 = stdlib.safeAdd(v377, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
        sim_r.isHalt = false;
        }
      else {
        const v606 = stdlib.eq(v375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v609 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:147:14:decimal', stdlib.UInt_max, '2'), v361);
        const v611 = v606 ? v360 : v368;
        sim_r.txns.push({
          kind: 'from',
          to: v611,
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
  const {data: [], secs: v370, time: v369, didSend: v38, from: v368 } = txn2;
  const v372 = stdlib.add(v361, v361);
  ;
  let v373 = stdlib.checkedBigNumberify('./index.rsh:86:83:decimal', stdlib.UInt_max, '0');
  let v374 = stdlib.checkedBigNumberify('./index.rsh:86:86:decimal', stdlib.UInt_max, '0');
  let v375 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v377 = v369;
  let v384 = v372;
  
  let txn3 = txn2;
  while (await (async () => {
    const v396 = stdlib.eq(v375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v396;})()) {
    const v403 = stdlib.safeAdd(v377, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
    stdlib.protect(ctc1, await interact.seePoints(v373, v374), {
      at: './index.rsh:93:31:application',
      fs: ['at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:31:function exp)'],
      msg: 'seePoints',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: ['time', v403],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v360, v361, v368, v373, v374, v384, v403],
        evt_cnt: 0,
        funcNum: 4,
        lct: v377,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v590, time: v589, didSend: v307, from: v588 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v368,
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
      const {data: [], secs: v590, time: v589, didSend: v307, from: v588 } = txn5;
      ;
      const v591 = stdlib.addressEq(v360, v588);
      const v592 = stdlib.addressEq(v368, v588);
      const v593 = v591 ? true : v592;
      stdlib.assert(v593, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:108:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:68:35:application',
        fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:108:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v420], secs: v422, time: v421, didSend: v83, from: v419 } = txn4;
      ;
      const v423 = stdlib.addressEq(v360, v419);
      stdlib.assert(v423, {
        at: './index.rsh:107:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v430 = stdlib.safeAdd(v421, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc2],
        timeoutAt: ['time', v430],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v360, v361, v368, v373, v374, v384, v420, v430],
          evt_cnt: 0,
          funcNum: 6,
          lct: v421,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v572, time: v571, didSend: v273, from: v570 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v368,
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
        const {data: [], secs: v572, time: v571, didSend: v273, from: v570 } = txn6;
        ;
        const v573 = stdlib.addressEq(v360, v570);
        const v574 = stdlib.addressEq(v368, v570);
        const v575 = v573 ? true : v574;
        stdlib.assert(v575, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:113:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:68:35:application',
          fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:113:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v433], secs: v435, time: v434, didSend: v89, from: v432 } = txn5;
        ;
        const v436 = stdlib.addressEq(v360, v432);
        stdlib.assert(v436, {
          at: './index.rsh:112:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v443 = stdlib.safeAdd(v434, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
        const v447 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:118:56:application',
          fs: ['at ./index.rsh:117:17:application call to [unknown function] (defined at: ./index.rsh:117:21:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v448 = stdlib.protect(ctc0, await interact.getGuess(v447), {
          at: './index.rsh:119:58:application',
          fs: ['at ./index.rsh:117:17:application call to [unknown function] (defined at: ./index.rsh:117:21:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn6 = await (ctc.sendrecv({
          args: [v360, v361, v368, v373, v374, v384, v420, v433, v443, v447, v448],
          evt_cnt: 2,
          funcNum: 7,
          lct: v434,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:121:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v450, v451], secs: v453, time: v452, didSend: v101, from: v449 } = txn6;
            
            ;
            const v461 = stdlib.safeAdd(v452, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v443],
          tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v360, v361, v368, v373, v374, v384, v420, v433, v443],
            evt_cnt: 0,
            funcNum: 8,
            lct: v434,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v554, time: v553, didSend: v239, from: v552 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v360,
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
          const {data: [], secs: v554, time: v553, didSend: v239, from: v552 } = txn7;
          ;
          const v555 = stdlib.addressEq(v360, v552);
          const v556 = stdlib.addressEq(v368, v552);
          const v557 = v555 ? true : v556;
          stdlib.assert(v557, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:122:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:68:35:application',
            fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:122:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v450, v451], secs: v453, time: v452, didSend: v101, from: v449 } = txn6;
          ;
          const v454 = stdlib.addressEq(v368, v449);
          stdlib.assert(v454, {
            at: './index.rsh:121:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v461 = stdlib.safeAdd(v452, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 9,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v461],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v360, v361, v368, v373, v374, v384, v420, v433, v450, v451, v461],
              evt_cnt: 0,
              funcNum: 10,
              lct: v452,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v536, time: v535, didSend: v205, from: v534 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v368,
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
            const {data: [], secs: v536, time: v535, didSend: v205, from: v534 } = txn8;
            ;
            const v537 = stdlib.addressEq(v360, v534);
            const v538 = stdlib.addressEq(v368, v534);
            const v539 = v537 ? true : v538;
            stdlib.assert(v539, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:133:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:68:35:application',
              fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:133:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v466, v467], secs: v469, time: v468, didSend: v111, from: v465 } = txn7;
            ;
            const v470 = stdlib.addressEq(v360, v465);
            stdlib.assert(v470, {
              at: './index.rsh:132:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v471 = stdlib.digest([ctc0, ctc0], [v466, v467]);
            const v472 = stdlib.digestEq(v420, v471);
            stdlib.assert(v472, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:134:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v479 = stdlib.safeAdd(v468, stdlib.checkedBigNumberify('./index.rsh:52:18:decimal', stdlib.UInt_max, '10'));
            const txn8 = await (ctc.recv({
              didSend: false,
              evt_cnt: 2,
              funcNum: 11,
              out_tys: [ctc0, ctc0],
              timeoutAt: ['time', v479],
              waitIfNotPresent: false
              }));
            if (txn8.didTimeout) {
              const txn9 = await (ctc.sendrecv({
                args: [v360, v361, v368, v373, v374, v384, v433, v450, v451, v467, v479],
                evt_cnt: 0,
                funcNum: 12,
                lct: v468,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v518, time: v517, didSend: v171, from: v516 } = txn9;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v368,
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
              const {data: [], secs: v518, time: v517, didSend: v171, from: v516 } = txn9;
              ;
              const v519 = stdlib.addressEq(v360, v516);
              const v520 = stdlib.addressEq(v368, v516);
              const v521 = v519 ? true : v520;
              stdlib.assert(v521, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:138:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:68:35:application',
                fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:138:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v482, v483], secs: v485, time: v484, didSend: v121, from: v481 } = txn8;
              ;
              const v486 = stdlib.addressEq(v360, v481);
              stdlib.assert(v486, {
                at: './index.rsh:137:15:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v487 = stdlib.digest([ctc0, ctc0], [v482, v483]);
              const v488 = stdlib.digestEq(v433, v487);
              stdlib.assert(v488, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:139:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              let v489;
              const v490 = stdlib.safeAdd(v467, v450);
              const v491 = stdlib.eq(v483, v451);
              if (v491) {
                const v493 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                const v494 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                const v622 = v494 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v492 = v493 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v622;
                const v495 = [v492, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v373, v374];
                v489 = v495;
                }
              else {
                const v496 = stdlib.eq(v490, v483);
                if (v496) {
                  const v497 = stdlib.safeAdd(v373, stdlib.checkedBigNumberify('./index.rsh:28:51:decimal', stdlib.UInt_max, '1'));
                  const v499 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                  const v500 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                  const v623 = v500 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v498 = v499 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v623;
                  const v501 = [v498, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v497, v374];
                  v489 = v501;
                  }
                else {
                  const v502 = stdlib.eq(v490, v451);
                  if (v502) {
                    const v503 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:32:47:decimal', stdlib.UInt_max, '1'));
                    const v505 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                    const v506 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                    const v624 = v506 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v504 = v505 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v624;
                    const v507 = [v504, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v373, v503];
                    v489 = v507;
                    }
                  else {
                    const v509 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:11:26:decimal', stdlib.UInt_max, '3'));
                    const v510 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:13:31:decimal', stdlib.UInt_max, '3'));
                    const v625 = v510 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    const v508 = v509 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v625;
                    const v511 = [v508, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v373, v374];
                    v489 = v511;
                    }
                  }
                }
              const v512 = v489[stdlib.checkedBigNumberify('./index.rsh:141:9:array', stdlib.UInt_max, '0')];
              const v514 = v489[stdlib.checkedBigNumberify('./index.rsh:141:9:array', stdlib.UInt_max, '2')];
              const v515 = v489[stdlib.checkedBigNumberify('./index.rsh:141:9:array', stdlib.UInt_max, '3')];
              const cv373 = v514;
              const cv374 = v515;
              const cv375 = v512;
              const cv377 = v484;
              const cv384 = v384;
              
              v373 = cv373;
              v374 = cv374;
              v375 = cv375;
              v377 = cv377;
              v384 = cv384;
              
              txn3 = txn8;
              continue;}
            
            }
          
          }
        
        }
      
      }
    
    }
  const v606 = stdlib.eq(v375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v609 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:147:14:decimal', stdlib.UInt_max, '2'), v361);
  const v611 = v606 ? v360 : v368;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v375, v373, v374), {
    at: './index.rsh:152:28:application',
    fs: ['at ./index.rsh:151:9:application call to [unknown function] (defined at: ./index.rsh:151:27:function exp)'],
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
  appApproval: `ByATAAFYAwgKIAxIUAIEBoABoAGYAbABBWAmBAEAAQEACAAAAAAAAAABIjUAMRhBBzwqZEkiWzUBIQRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEHDEAD3kkhBQxAAe9JgQsMQAGVSSEHDEAAViEHEkQhBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVyggNf+ABMqrzjewMgY0AyEPWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgZSSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSlcAIDX/IQhbNf4hCVs1/YGIAVs1/Ek1BUkiWzX7IQRbNfqABCZke9Y0+xZQNPoWULAyBjQDIQ9bDEQ0/zEAEkQ0A1dgIDT7FjT6FlABEkQ0A4GQAVs0AyENWwg1+DT6NPwSQQAeIyEKNP0lEk0iNP4lEk0WK1A0/hZQNP0WUDX5QgB2NPg0+hJBACIjIQo0/SUSTSI0/iUSTRYhBK9QNP4jCBZQNP0WUDX5QgBMNPg0/BJBACkjIQo0/SUSTSI0/iUSTRaACAAAAAAAAAACUDT+FlA0/SMIFlA1+UIAGyMhCjT9JRJNIjT+JRJNFitQNP4WUDT9FlA1+TT/NAMhBls0A1coIDT5gRBbNPmBGFs0+SJbMgY0AyRbQgSzSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNXKCA1/4AE00RzI7AyBjQDIRBbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCBMdJIQQMQAEpSYEJDEAAz0ghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yEGWzX+VyggNf0hCFs1/CEJWzX7JFs1+leAIDX5IQ5bNfiBqAFbNfdJNQVJIls19iEEWzX1gASp2U09NPYWUDT1FlCwMgY0AyEQWwxENP8xABJENANXYCA09hY09RZQARJEMgYhBQg19DT/NP4WUDT9UDT8FlA0+xZQNPoWUDT5UDT4FlA09xZQNPUWUDT0FlAoSwFXAH9nKUsBV38hZ0ghBzUBMgY1AkIEBkghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABBf82y6wMgY0AyEOWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgOXSCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8hBls1/lcoIDX9IQhbNfwhCVs1+yRbNfpXYCA1+VeAIDX4STUFSSJbNfchBFs19oAEgmt7djT3FlA09hZQsDIGNAMhDlsMRDT9MQASRDIGIQUINfU0/zT+FlA0/VA0/BZQNPsWUDT6FlA0+VA0+FA09xZQNPYWUDT1FlAoSwFXAH9nKUsBV385Z0ghBTUBMgY1AkIC+0khCwxAAU9JIREMQAD4SSEMDEAAU0ghDDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVyggNf+ABGG0rAywMgY0AyENWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgJ3SCEMNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hBls1/lcoIDX9IQhbNfwhCVs1+yRbNfpXYCA1+Uk1BTX4gATNpujLNPhQsDIGNAMhDVsMRDT/MQASRDIGIQUINfc0/zT+FlA0/VA0/BZQNPsWUDT6FlA0+VA0+FA09xZQKEsBVwB/ZylLAVd/KWdIIQQ1ATIGNQJCAfVIIQs0ARJENARJIhJMNAISEUQoZEk1A1coIDX/gASRJzTzsDIGNAMhElsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IBiUkjDEAA1kklDEAAkkghCzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8hBls1/lcoIDX9IQhbNfwhCVs1+yRbNfpJNQU1+YAEE+7qUTT5ULAyBjQDIRJbDEQ0/zEAEkQyBiEFCDX4NP80/hZQNP1QNPwWUDT7FlA0+hZQNPlQNPgWUChLAVcAf2cpSwFXfwlnSCEMNQEyBjUCQgEHIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQZbNf+ABJqLkXSwNP+IAS80A1cAIDT/MQAiIiMyBjT/SQhCAEZIgaCNBogBEiI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iADsMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgCDNf81/jX9Nfw1+zX6Nfk1+DT9IxJBADM0/iEFCDX3NPg0+RZQNPpQNPsWUDT8FlA0/xZQNPcWUChLAVcAaGdIIQs1ATIGNQJCADmxIrIBIQo0+QuyCCOyEDT6NPg0/SISTbIHs0IAADEZIRESRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v361",
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
                "name": "v361",
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
                "name": "v482",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v483",
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
                "name": "v420",
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
                "name": "v433",
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
                "name": "v450",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v451",
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
                "name": "v466",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v467",
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
                "name": "v482",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v483",
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
                "name": "v420",
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
                "name": "v433",
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
                "name": "v450",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v451",
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
                "name": "v466",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v467",
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
  Bytecode: `0x60806040526040516200274a3803806200274a8339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b61249c80620002ae6000396000f3fe6080604052600436106100d55760003560e01c80638323075711610079578063c798003711610056578063c7980037146101bf578063e00acef1146101d2578063e533a29d146101e5578063f4cedab0146101f857005b80638323075714610174578063a7661d5414610189578063ab53f2c61461019c57005b80632c10a159116100b25780632c10a15914610128578063422eb85c1461013b578063552d7b8e1461014e57806366ad16d01461016157005b806311faee8c146100de5780631e93b0f1146100f1578063273206b81461011557005b366100dc57005b005b6100dc6100ec366004611e70565b61020b565b3480156100fd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc610123366004611ea5565b6103c2565b6100dc610136366004611e70565b6106a2565b6100dc610149366004611ea5565b610827565b6100dc61015c366004611e70565b610a8c565b6100dc61016f366004611ea5565b610d13565b34801561018057600080fd5b50600154610102565b6100dc610197366004611e70565b611103565b3480156101a857600080fd5b506101b161125d565b60405161010c929190611ec1565b6100dc6101cd366004611e70565b6112fa565b6100dc6101e0366004611e70565b611454565b6100dc6101f3366004611e70565b6115af565b6100dc610206366004611e70565b611747565b61021b600c60005414603c6119b3565b6102358135158061022e57506001548235145b603d6119b3565b60008080556002805461024790611f1e565b80601f016020809104026020016040519081016040528092919081815260200182805461027390611f1e565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b50505050508060200190518101906102d89190612078565b90506102ed816101400151431015603e6119b3565b7f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf338360405161031e929190612095565b60405180910390a16103323415603a6119b3565b8051610366906001600160a01b0316331461035c5760408201516001600160a01b0316331461035f565b60015b603b6119b3565b80604001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156103a7573d6000803e3d6000fd5b50600080805560018190556103be90600290611c25565b5050565b6103d2600a60005414602c6119b3565b6103ec813515806103e557506001548235145b602d6119b3565b6000808055600280546103fe90611f1e565b80601f016020809104026020016040519081016040528092919081815260200182805461042a90611f1e565b80156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b505050505080602001905181019061048f9190612078565b90506104a76040518060200160405280600081525090565b6104b98261014001514310602e6119b3565b7f61a975c2eb129c07d71a871df28eb78724f84a0b02b4a03b148b42a7224a9a2833846040516104ea9291906120d2565b60405180910390a16104fe341560296119b3565b8151610516906001600160a01b03163314602a6119b3565b604080516105629161053c91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360c0015114602b6119b3565b61056d43600a6119d9565b8160000181815250506105e560405180610160016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260e08086015160c08501526101008087015191850191909152610120808701519185019190915286830135908401528351610140840152600c60005543600155905161067791839101612189565b6040516020818303038152906040526002908051906020019061069b929190611c62565b5050505050565b6106b260016000541460096119b3565b6106cc813515806106c557506001548235145b600a6119b3565b6000808055600280546106de90611f1e565b80601f016020809104026020016040519081016040528092919081815260200182805461070a90611f1e565b80156107575780601f1061072c57610100808354040283529160200191610757565b820191906000526020600020905b81548152906001019060200180831161073a57829003601f168201915b505050505080602001905181019061076f9190612198565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516107a2929190612095565b60405180910390a16107bb8160200151341460086119b3565b6107c3611ce6565b815181516001600160a01b03909116905260208083018051835183015282513360409182015282840180516000908190528151909401939093528251600191015290514360609091015251800160208201516080015261082281611a2c565b505050565b61083760086000541460216119b3565b6108518135158061084a57506001548235145b60226119b3565b60008080556002805461086390611f1e565b80601f016020809104026020016040519081016040528092919081815260200182805461088f90611f1e565b80156108dc5780601f106108b1576101008083540402835291602001916108dc565b820191906000526020600020905b8154815290600101906020018083116108bf57829003601f168201915b50505050508060200190518101906108f491906121fd565b905061090c6040518060200160405280600081525090565b61091e826101000151431060236119b3565b7f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa338460405161094f9291906120d2565b60405180910390a16109633415601f6119b3565b604082015161097e906001600160a01b0316331460206119b3565b61098943600a6119d9565b816000018181525050610a0160405180610160016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c0808601519084015260e0808601519084015285810135610100840152858201356101208401528351610140840152600a60005543600155905161067791839101612189565b610a9c60066000541460176119b3565b610ab681351580610aaf57506001548235145b60186119b3565b600080805560028054610ac890611f1e565b80601f0160208091040260200160405190810160405280929190818152602001828054610af490611f1e565b8015610b415780601f10610b1657610100808354040283529160200191610b41565b820191906000526020600020905b815481529060010190602001808311610b2457829003601f168201915b5050505050806020019051810190610b599190612286565b9050610b716040518060200160405280600081525090565b610b828260e00151431060196119b3565b7f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d33384604051610bb3929190612332565b60405180910390a1610bc7341560156119b3565b8151610bdf906001600160a01b0316331460166119b3565b610bea43600a6119d9565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c080860151908401528581013560e0840152835161010084015260086000554360015590516106779183910181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b610d23600c6000541460376119b3565b610d3d81351580610d3657506001548235145b60386119b3565b600080805560028054610d4f90611f1e565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7b90611f1e565b8015610dc85780601f10610d9d57610100808354040283529160200191610dc8565b820191906000526020600020905b815481529060010190602001808311610dab57829003601f168201915b5050505050806020019051810190610de09190612078565b9050610dea611d46565b610dfc826101400151431060396119b3565b7fde56afa74c9f6c9211234ba8c87db17d1f2d7f456e99f217651173a9368d4d463384604051610e2d9291906120d2565b60405180910390a1610e41341560346119b3565b8151610e59906001600160a01b0316331460356119b3565b60408051610ea591610e7f91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360c001511460366119b3565b610eb88261012001518360e001516119d9565b602082015261010082015160408401351415610f2e576003826060015114610ef4576003826080015114610eed576001610ef7565b6002610ef7565b60005b6040808301805192909252815160016020909101526060808501518351909201919091526080840151825190910152518152611083565b602081015160408401351415610fab576003826060015114610f64576003826080015114610f5d576001610f67565b6002610f67565b60005b606080830180519290925290516000602090910152820151610f8a9060016119d9565b60608083018051604001929092526080840151825190910152518152611083565b8161010001518160200151141561102b576003826060015114610fe2576003826080015114610fdb576001610fe5565b6002610fe5565b60005b60808083018051929092528151600260209091015260608401519151604001919091528201516110169060016119d9565b60808201805160600191909152518152611083565b600382606001511461105157600382608001511461104a576001611054565b6002611054565b60005b60a082018051919091528051600160209091015260608084015182516040015260808401518251909101525181525b61108b611ce6565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092528351820151818401805191909152845160609081015182519093019290925284515181519093019290925281514391015260a08401519051608001526110fd81611a2c565b50505050565b61111360046000541460126119b3565b61112d8135158061112657506001548235145b60136119b3565b60008080556002805461113f90611f1e565b80601f016020809104026020016040519081016040528092919081815260200182805461116b90611f1e565b80156111b85780601f1061118d576101008083540402835291602001916111b8565b820191906000526020600020905b81548152906001019060200180831161119b57829003601f168201915b50505050508060200190518101906111d09190612359565b90506111e48160c0015143101560146119b3565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051611215929190612095565b60405180910390a1611229341560106119b3565b8051610366906001600160a01b031633146112535760408201516001600160a01b03163314611256565b60015b60116119b3565b60006060600054600280805461127290611f1e565b80601f016020809104026020016040519081016040528092919081815260200182805461129e90611f1e565b80156112eb5780601f106112c0576101008083540402835291602001916112eb565b820191906000526020600020905b8154815290600101906020018083116112ce57829003601f168201915b50505050509050915091509091565b61130a600660005414601c6119b3565b6113248135158061131d57506001548235145b601d6119b3565b60008080556002805461133690611f1e565b80601f016020809104026020016040519081016040528092919081815260200182805461136290611f1e565b80156113af5780601f10611384576101008083540402835291602001916113af565b820191906000526020600020905b81548152906001019060200180831161139257829003601f168201915b50505050508060200190518101906113c79190612286565b90506113db8160e00151431015601e6119b3565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae338360405161140c929190612095565b60405180910390a16114203415601a6119b3565b8051610366906001600160a01b0316331461144a5760408201516001600160a01b0316331461144d565b60015b601b6119b3565b611464600a6000541460316119b3565b61147e8135158061147757506001548235145b60326119b3565b60008080556002805461149090611f1e565b80601f01602080910402602001604051908101604052809291908181526020018280546114bc90611f1e565b80156115095780601f106114de57610100808354040283529160200191611509565b820191906000526020600020905b8154815290600101906020018083116114ec57829003601f168201915b50505050508060200190518101906115219190612078565b905061153681610140015143101560336119b3565b7f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a3383604051611567929190612095565b60405180910390a161157b3415602f6119b3565b8051610366906001600160a01b031633146115a55760408201516001600160a01b031633146115a8565b60015b60306119b3565b6115bf60086000541460266119b3565b6115d9813515806115d257506001548235145b60276119b3565b6000808055600280546115eb90611f1e565b80601f016020809104026020016040519081016040528092919081815260200182805461161790611f1e565b80156116645780601f1061163957610100808354040283529160200191611664565b820191906000526020600020905b81548152906001019060200180831161164757829003601f168201915b505050505080602001905181019061167c91906121fd565b905061169181610100015143101560286119b3565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633836040516116c2929190612095565b60405180910390a16116d6341560246119b3565b805161170a906001600160a01b031633146117005760408201516001600160a01b03163314611703565b60015b60256119b3565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103a7573d6000803e3d6000fd5b611757600460005414600d6119b3565b6117718135158061176a57506001548235145b600e6119b3565b60008080556002805461178390611f1e565b80601f01602080910402602001604051908101604052809291908181526020018280546117af90611f1e565b80156117fc5780601f106117d1576101008083540402835291602001916117fc565b820191906000526020600020905b8154815290600101906020018083116117df57829003601f168201915b50505050508060200190518101906118149190612359565b905061182c6040518060200160405280600081525090565b61183d8260c001514310600f6119b3565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1338460405161186e929190612332565b60405180910390a16118823415600b6119b3565b815161189a906001600160a01b03163314600c6119b3565b6118a543600a6119d9565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a080860151908401528581013560c0840152835160e084015260066000554360015590516106779183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816103be5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826119e6838261240d565b9150811015611a265760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016119d0565b92915050565b60408051602081019091526000815260018260200151604001511415611b6257611a5f826020015160600151600a6119d9565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015185168187019081528389018051516060808a0191825282518701516080808c01918252935184015160a0808d019182528d5160c0808f0191825260046000554360015589519b8c019c909c529851978a01979097529451909916908701525190850152945190830152925191810191909152905160e082015261010001604051602081830303815290604052600290805190602001906110fd929190611c62565b60208201516040015115611b7b57815160400151611b7f565b8151515b6001600160a01b03166108fc611b9e6002856000015160200151611bc6565b6040518115909202916000818181858888f193505050501580156103a7573d6000803e3d6000fd5b6000811580611bea57508282611bdc8183612425565b9250611be89083612444565b145b611a265760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016119d0565b508054611c3190611f1e565b6000825580601f10611c41575050565b601f016020900490600052602060002090810190611c5f9190611e43565b50565b828054611c6e90611f1e565b90600052602060002090601f016020900481019282611c905760008555611cd6565b82601f10611ca957805160ff1916838001178555611cd6565b82800160010185558215611cd6579182015b82811115611cd6578251825591602001919060010190611cbb565b50611ce2929150611e43565b5090565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611d416040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b6040518060c00160405280611d7c6040518060800160405280600081526020016000815260200160008152602001600081525090565b815260200160008152602001611db36040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001611de36040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001611e136040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001611d416040518060800160405280600081526020016000815260200160008152602001600081525090565b5b80821115611ce25760008155600101611e44565b600060408284031215611e6a57600080fd5b50919050565b600060408284031215611e8257600080fd5b611e8c8383611e58565b9392505050565b600060608284031215611e6a57600080fd5b600060608284031215611eb757600080fd5b611e8c8383611e93565b82815260006020604081840152835180604085015260005b81811015611ef557858101830151858201606001528201611ed9565b81811115611f07576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611f3257607f821691505b60208210811415611e6a57634e487b7160e01b600052602260045260246000fd5b604051610160810167ffffffffffffffff81118282101715611f8557634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611f8557634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611fd457600080fd5b919050565b60006101608284031215611fec57600080fd5b611ff4611f53565b9050611fff82611fbd565b81526020820151602082015261201760408301611fbd565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525061014080830151818301525092915050565b6000610160828403121561208b57600080fd5b611e8c8383611fd9565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146120c357600080fd5b80604085015250509392505050565b6001600160a01b038316815260808101611e8c60208301848035825260208082013590830152604090810135910152565b80516001600160a01b0316825260208101516020830152604081015161213460408401826001600160a01b03169052565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e080820151908301526101008082015190830152610120808201519083015261014090810151910152565b6101608101611a268284612103565b6000604082840312156121aa57600080fd5b6040516040810181811067ffffffffffffffff821117156121db57634e487b7160e01b600052604160045260246000fd5b6040526121e783611fbd565b8152602083015160208201528091505092915050565b6000610120828403121561221057600080fd5b612218611f8b565b61222183611fbd565b81526020830151602082015261223960408401611fbd565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600061010080838503121561229a57600080fd5b6040519081019067ffffffffffffffff821181831017156122cb57634e487b7160e01b600052604160045260246000fd5b816040526122d884611fbd565b8152602084015160208201526122f060408501611fbd565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b038316815260608101611e8c602083018480358252602090810135910152565b600060e0828403121561236b57600080fd5b60405160e0810181811067ffffffffffffffff8211171561239c57634e487b7160e01b600052604160045260246000fd5b6040526123a883611fbd565b8152602083015160208201526123c060408401611fbd565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612420576124206123f7565b500190565b600081600019048311821515161561243f5761243f6123f7565b500290565b60008261246157634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122008e9d4620900979bce4edbdf2c55f2e7d2128853c8a93ecc0d2f79c3c9b9307b64736f6c634300080c0033`,
  BytecodeLen: 10058,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:77:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:149:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:90:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:108:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:109:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:113:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:114:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:122:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:123:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:133:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:135:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:138:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
