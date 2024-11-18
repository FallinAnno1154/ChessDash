export function level(lev){
  if(lev=='2'){
    block(
			{intro:true},
			'','','',
			intro ? '  reqr' : '',
			intro ? '   kk' : '',
			'',
			'',
			'',
			'',
			'',
			'',
			'kkkkkkkk'
		);

		// first pawn
		block(
			{showThreat:'p'},
			'   p',
			'  pp',
			' p',
			' p p',
			'  pp',
			'  ppp',
			'      p',
			''
		);

		// scattered pawns
		block(
			'  pppp',
			'  pppp',
			'',
			'  p',
			'',
			'     p',
			'',
			' p'
		);

		// pawn rows
		block(
			'',
			'pppppp',
			'',
			'  pppppp',
			'',
			'pppppp',
			'',
			''
		);

		// triangle
		block(
			'',
			'pp   ppp',
			'  p p',
			'   p',
			'',
			'',
			'',
			''
		);

		// sawtooth
		block(
			'',
			'   pp',
			'p p  p p',
			' p    p',
			'',
			'',
			'',
			''
		);

		// wedges
		block(
			'',
			'    ppp',
			'     p',
			'ppp',
			' p   ppp',
			'      p',
			'',
			''
		);

		//CHECK POINT 1
		checkPoint();

		// first rook
		block(
			{showThreat:'r'},
			'',
			'   p',
			'',
			'   r',
			'',
			'   p',
			'',
			''
		);

		// rook diag
		block(
			'',
			'',
			'r',
			' r',
			'  r',
			'   r',
			'    r',
			'     r',
			'pppppp'
		);

		// rook rows
        block(
            '',
            '',
            '',
            '       p',
            '    rp r',
            '',
            '',
            'pp',
            'r   p  p',
            'p'
        );

		// rook labyrinth
		block(
            '',
            'p     r',
            'r     p',
            'r    p',
            '',
            '   p',
            '   p',
            'p  ppppp',
            ''
        );

		//CHECK POINT 2
        checkPoint();

		//10 first bishop
		block(
			{showThreat:'b'},
			'',
			'',
			'',
			'',
			'...b',
			'',
			'',
			'',
			''
		);

		//11 bishop field
		block(
			'',
			' p p p',
			'b b b b',
			'',
			'',
			'',
			'',
			'',
			''
		);

		//12 rooks & bishops simple
		block(
			'',
			'r.p..p.r',
			'p......p',
			'',
			'b      b',
			'pp....pp',
			'',
			''
		);


		//13 pawns, bishops and rooks
		block(
			'',
			'r',
			' r  p..b',
			'     ..r',
			'....p',
			'...p',
			'..p',
			'pp.....p'
		);

		//CHECK POINT 3
		checkPoint();

		//14 first knight
		block(
			{showThreat:'k'},
			'',
			'',
			'   k',
			'',
			'',
			'',
			'',
			''
		);

		//15 knight rows
		block(
			'p',
			'r.....p',
			'',
			'',
			'......kk',
			'',
			'pkk',
			''
		);

		//rooks bishop and knight
        block(
            'p   pppp',
            'r    b r',
            '   p b p',
            '',
            '',
            '',
            ' k',
            '',
            '',
            ''
        );

        //CHECK POINT 4
        checkPoint();

        //first land mine
        block(
            {showThreat:'l'},
            '',
            '',
            '',
            '   l',
            '',
            '',
            '',
            ''
        );

        //land mines
        block(
            'l.llllll',
            'l.l....l',
            '..l.llll',
            '.ll.l   ',
            'l...l l ',
            'l.lll l ',
            'l.    l ',
            'lllllll '
        );

		//land mines and pawns
        block(
            ' p  pll',
            ' l p   l',
            'lpl p p ',
            '     lp',
            'll ll l',
            ' l  l',
            '',
            ''
        );

        //k,r,b,p,l
        block(
            '',
            '  r',
            '  llk',
            '     .',
            '   l ..',
            '   p  pb',
            '  . .  l',
            '  p  l',
            '',
            '',
            '',
            '',
            ''
        );

        //CHECK POINT 5
        checkPoint();

        block(
            '',
            'c',
            '',
            '',
            '',
            '',
            ''
        );
  }
}
