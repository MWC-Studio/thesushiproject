import React from "react";

const OrderTypeChart = () => {

	return (
		<svg xmlns="http://www.w3.org/2000/svg" role="img" width="170" height="168">
			<rect width="170" height="168" fill="transparent"></rect>
			<g transform="translate(-26, 20)">
				<g transform="translate(111,64)">
					<path d="M-28.72969203935616,78.9341801460163A84,84,0,0,1,-66.19290330296461,-51.71556392735533L0,0Z" opacity="1" fill="#40464D" stroke="yellow" strokeWidth="0"></path>
					<path d="M-66.19290330296461,-51.71556392735533A84,84,0,0,1,83.94882946960405,2.931557723010104L0,0Z" opacity="1" fill="#F48A88" stroke="red" strokeWidth="0"></path>
					<path d="M83.94882946960405,2.931557723010104A84,84,0,0,1,-28.729692039356205,78.93418014601629L0,0Z" opacity="1" fill="#E8D3D2" stroke="red" strokeWidth="0"></path>
				</g>
				<g transform="translate(111,64)">
					<g transform="translate(-40.372991229409394,11.576768944313958)" opacity="1">
						<text textAnchor="middle" dominantBaseline="central" stroke="#ffffff" x="-5" y="-10">
							Dine In
						</text>
						<text textAnchor="middle" dominantBaseline="central" stroke="#ffffff" x="-5" y="10">
							(30%)
						</text>                                    
					</g>
					<g transform="translate(14.3648460196781,-39.46709007300815)" opacity="1">
						<text className="svg-text" textAnchor="middle" dominantBaseline="central" stroke="#333333" x="-5" y="-10">
							Delivery
						</text>
						<text className="svg-text" textAnchor="middle" dominantBaseline="central" stroke="#333333" x="-5" y="10">
							(40%)
						</text>
					</g>
					<g transform="translate(23.486101945771352,34.819578047311765)" opacity="1">
						<text className="svg-text" textAnchor="middle" dominantBaseline="central" stroke="#333333" x="5" y="-10">
							To-Go
						</text>
						<text className="svg-text" textAnchor="middle" dominantBaseline="central" stroke="#333333" x="5" y="10">
							(30%)
						</text>
					</g>
				</g>
			</g>
		</svg>    
	);
}

export default OrderTypeChart;
