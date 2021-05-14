/* CSS */
import '../css/SVGIcons.css'
import '../css/SVGGlobe.css'

function SVGGlobe(props) {
	return (
		<>
		<div class="svg-container">
			<svg
			  version="1.1"
			  id="globe-svg"
			  class={props.className}
			  xmlns="http://www.w3.org/2000/svg"
			  viewBox="0 0 512 512"
			>
			<g class="globe-svg-sea">
				<path d="M379.015,469.036c-117.63,67.914-268.042,27.611-335.956-90.019S15.447,110.973,133.078,43.06
					S401.12,15.45,469.034,133.079S496.645,401.122,379.015,469.036z"/>
			</g>
			<g class="globe-svg-earth">
				<path d="M273.404,182.451c-1.77,0.415-5.2,1.286-6.683,2.476c-1.852,1.485,1.042,3.416-0.015,4.262
					c-1.825,1.46-3.148,4.108-7.055,3.858c-8.162-0.521-20.706-11.079-28.165-15.07c12.024-12.374-6.999-14.228-14.413-13.608
					c-9.601,0.803-26.216-0.063-34.889,4.82c-6.019,3.389-14.109,17.455-18.958,23.042c-6.75,7.776-13.542,14.527-17.94,23.837
					c-16.135,34.153,8.699,73.362,47.729,68.776c10.836-1.273,22.203-8.086,31.807,0.904c7.077,6.625,3.332,12.86,5.208,20.586
					c1.624,6.686,9.027,10.799,11.589,16.939c4.913,11.77,1.802,19.131-1.705,29.987c-4.602,14.245,7.299,31.158,11.931,44.905
					c2.332,6.922,9.129,26.306,15.802,29.339c10.492,4.77,26.937-9.535,33.202-17.229c4.898-6.015,3.299-12.125,6.589-17.757
					c3.561-6.095,8.067-7.925,10.562-15.783c2.689-8.47,5.483-10.577,11.162-16.758c9.143-9.948,7.723-15.765,4.068-27.561
					c-7.595-24.506,19.992-35.962,32.418-53.951c12.976-18.785-12.106-12.523-21.936-18.948c-10.107-6.606-14.524-19.161-19.394-29.569
					c-4.872-10.409-8.903-26.051-16.97-34.601C301.133,188.764,282.229,185.71,273.404,182.451z"/>
				<path d="M400.356,346.844c-3.921,13.214-7.841,26.428-11.762,39.642
					c-2.741,9.238-12.432,39.458-26.028,20.101c-5.168-7.356-0.965-16.995,1.918-23.764c3.637-8.54-1.278-12.84,1.258-20.925
					c2.908-9.267,14.872-9.584,20.533-16.102c3.948-4.544,6.383-11.769,9.268-17.089C397.149,334.754,398.753,340.798,400.356,346.844z
					"/>
				<path d="M469.034,133.079C426.674,59.71,352.218,16.429,273.641,10.721l-32.162,40.344l-68.931,24.166
					l-18.492,44.828l28.525,39.959l3.032-8.448c5.063-14.105,18.434-23.512,33.419-23.512h47.013l54.04,18.99l18.613,17.768v11.286
					l25.877,49.567l7.535-2.779c16.272-6,31.047-15.458,43.311-27.721l-6.247-9.372c-1.987-2.98,0.15-6.971,3.731-6.971h15.08
					c4.416,0,8.61,1.934,11.478,5.292l12.319,14.423c1.174,1.374,2.091,2.948,2.709,4.646l13.594,37.383l6.471-6.471
					c4.08-4.081,6.146-9.64,6.242-15.41c0.077-4.639,2.09-9.04,5.559-12.134l4.956-4.42c1.246-1.111,2.636-2.014,4.116-2.697
					C490.042,176.703,481.317,154.354,469.034,133.079z"/>
				<path d="M101.107,142.686l11.763-12.605c8.577-9.191,11.007-22.541,6.217-34.165l0,0
					c-5.064-12.29-16.167-20.258-28.457-21.906c-43.44,39.398-70.449,92.367-78.219,148.474c9.184,8.028,18.795,16.622,18.74,17.379
					c-0.106,1.449,34.409-4.338,34.409-4.338l-17.768-26.065l25.517-18.245L101.107,142.686z"/>
				<path d="M125.025,387.739c11.088-3.602,17.156-15.511,13.554-26.598l-3.167-9.749
					c-1.384-4.259-1.377-8.847,0.019-13.102l0,0c3.957-12.062-3.551-24.862-16.009-27.297l-24.853-4.857L49.17,271.619l-37.533,12.193
					c3.686,32.595,13.973,64.981,31.421,95.204c16.138,27.951,36.94,51.525,60.846,70.33l11.184-58.379L125.025,387.739z"/>
			</g>
			<g class="globe-svg-border">
				<path d="M373.997,460.388l-0.385,0.222c-4.776,2.771-6.401,8.89-3.631,13.667c1.855,3.197,5.21,4.983,8.658,4.983
					c1.702,0,3.43-0.437,5.009-1.353l0.385-0.222c4.776-2.771,6.401-8.89,3.631-13.667C384.894,459.244,378.776,457.617,373.997,460.388
					z"/>
				<path d="M477.694,128.08C443.512,68.875,388.321,26.526,322.287,8.832C256.255-8.862,187.283,0.219,128.078,34.4
					S26.524,123.773,8.831,189.806s-8.613,135.006,25.568,194.21c30.661,53.107,79.393,93.468,137.219,113.646
					c27.411,9.564,56.026,14.337,84.597,14.337c31.065,0,62.074-5.646,91.385-16.912c5.155-1.981,7.727-7.766,5.745-12.921
					c-1.982-5.155-7.768-7.73-12.921-5.745c-78.02,29.987-162.482,16.362-225.585-31.004l8.959-46.765l4.317-1.402
					c16.313-5.3,25.273-22.884,19.975-39.198l-3.168-9.749c-0.733-2.256-0.729-4.641,0.01-6.895c2.779-8.472,1.786-17.741-2.725-25.433
					s-12.116-13.084-20.867-14.795l-22.57-4.41l-43.548-33.11c-2.609-1.984-6.024-2.563-9.142-1.551l-25.496,8.282
					c-0.541-9.119-0.549-18.235-0.035-27.303c1.006,0.937,1.661,1.574,2.064,1.992c0.499,0.831,1.117,1.593,1.841,2.253
					c2.082,1.896,3.968,2.756,7.928,2.756c3.639-0.001,9.026-0.726,17.921-2.04c8.436-1.247,16.828-2.652,16.911-2.666
					c3.363-0.563,6.206-2.803,7.544-5.938c1.338-3.136,0.985-6.737-0.936-9.555l-12.261-17.984l17.562-12.558
					c1.17-0.837,2.146-1.916,2.861-3.164l27.223-47.525l10.973-11.758c11.213-12.018,14.413-29.601,8.151-44.797
					c-3.694-8.963-10.146-16.425-18.216-21.454c8.74-6.871,18.059-13.215,27.963-18.932c36.338-20.98,75.994-31.147,115.233-31.536
					l-17.856,22.399L169.24,65.795c-2.689,0.942-4.849,2.988-5.935,5.623l-18.492,44.828c-1.313,3.185-0.896,6.819,1.105,9.623
					l27.008,37.832c-3.868,3.529-7.633,8.669-12.13,15.051c-1.972,2.799-3.834,5.442-5.121,6.924c-1.119,1.29-2.239,2.55-3.349,3.798
					c-5.809,6.535-11.815,13.294-16.082,22.322c-9.382,19.859-7.487,42.941,4.945,60.239c12.021,16.725,31.839,25.227,52.991,22.739
					c3.446-0.404,6.659-1.199,9.768-1.969c8.573-2.121,11.289-2.333,14.039,0.241c1.338,1.253,1.461,1.49,1.434,5.738
					c-0.019,2.704-0.04,6.068,0.892,9.909c1.493,6.145,5.353,10.392,8.452,13.804c1.541,1.695,3.135,3.449,3.626,4.626
					c3.119,7.474,1.761,11.613-1.215,20.683c-0.255,0.776-0.515,1.568-0.776,2.38c-4.521,13.995,1.781,27.877,7.341,40.124
					c1.806,3.977,3.511,7.731,4.628,11.049c8.991,26.679,15.731,32.789,21.14,35.249c2.833,1.288,5.765,1.853,8.727,1.852
					c14.415-0.001,29.457-13.385,36.367-21.87c4.34-5.328,5.409-10.663,6.189-14.56c0.389-1.938,0.695-3.468,1.279-4.468
					c0.894-1.53,1.947-2.716,3.28-4.218c2.681-3.019,6.017-6.775,8.179-13.584c1.642-5.172,2.835-6.44,6.786-10.648
					c0.688-0.731,1.421-1.513,2.208-2.369c13.319-14.493,9.889-25.564,6.256-37.286c-3.057-9.863,2.29-16.171,15.218-28.21
					c5.604-5.219,11.398-10.615,15.877-17.098c1.96-2.838,7.923-11.471,4.233-20.028c-3.617-8.39-12.81-9.8-20.196-10.932
					c-2.917-0.448-7.325-1.124-8.728-2.041c-6.187-4.045-9.972-12.487-13.633-20.652c-0.729-1.625-1.448-3.229-2.177-4.786
					c-1.3-2.778-2.599-6.139-3.974-9.697c-3.638-9.416-7.761-20.089-14.78-27.529c-6.309-6.685-18.202-9.905-28.695-12.747
					c-3.529-0.955-6.86-1.857-9.057-2.668c-1.841-0.68-3.839-0.803-5.746-0.355c-5.107,1.197-8.293,2.516-10.659,4.412
					c-0.625,0.501-2.476,2.146-3.56,4.79c-3.661-1.757-8.695-5.112-11.793-7.177c-0.064-0.043-0.129-0.086-0.193-0.129
					c1.044-4.178,0.099-7.531-0.891-9.625c-5.587-11.816-24.129-10.891-27.787-10.58c-2.078,0.174-4.707,0.267-7.488,0.365
					c-4.368,0.155-9.196,0.329-13.973,0.865l0.246-0.686c3.626-10.103,13.274-16.892,24.008-16.892h5.684
					c5.522,0,9.999-4.478,9.999-9.999c0-5.522-4.478-9.999-9.999-9.999h-5.684c-15.936,0-30.529,8.387-38.708,21.588l-14.915-20.893
					l14.674-35.569L244.787,60.5c1.774-0.622,3.338-1.732,4.511-3.203l28.762-36.079c73.494,6.991,142.674,48.197,182.316,116.859
					c10.559,18.289,18.37,37.543,23.563,57.236l-4.239,3.78c-5.533,4.937-8.775,12.018-8.899,19.429
					c-0.001,0.081-0.003,0.161-0.006,0.241l-6.906-18.992c-1.029-2.834-2.545-5.433-4.503-7.724l-12.319-14.423
					c-4.776-5.591-11.73-8.796-19.081-8.796h-15.079c-5.353,0-10.245,2.932-12.77,7.649c-2.525,4.718-2.249,10.416,0.72,14.868
					l1.526,2.291c-9.744,8.379-21.014,15.084-33.014,19.606L348.7,173.649v-8.833c0-2.732-1.118-5.347-3.095-7.232l-18.613-17.769
					c-1.027-0.98-2.251-1.73-3.59-2.201l-16.756-5.888c-5.213-1.834-10.919,0.909-12.749,6.118c-1.831,5.211,0.908,10.918,6.118,12.749
					l14.724,5.175l13.962,13.327v7.008c0,1.611,0.39,3.199,1.136,4.628l25.877,49.567c2.327,4.46,7.609,6.498,12.323,4.754l7.535-2.778
					c17.505-6.456,33.73-16.841,46.922-30.031c3.37-3.371,3.894-8.65,1.249-12.617l-0.532-0.799h4.775c1.493,0,2.906,0.651,3.876,1.787
					l12.319,14.423c0.397,0.465,0.704,0.991,0.914,1.568l13.595,37.383c1.168,3.212,3.896,5.604,7.23,6.344
					c0.72,0.159,1.445,0.237,2.166,0.237c2.623,0,5.176-1.033,7.07-2.929l6.471-6.471c4.098-4.099,6.919-9.285,8.267-15.034
					c10.008,80.205-21.441,163.173-87.915,215.347c-4.345,3.409-5.103,9.694-1.692,14.039c3.409,4.345,9.693,5.103,14.039,1.692
					c47.992-37.667,80.962-91.542,92.837-151.701C519.15,244.773,508.685,181.758,477.694,128.08z M47.283,282.747l41.233,31.351
					c1.219,0.927,2.633,1.561,4.135,1.854l24.852,4.856c3.172,0.62,5.818,2.496,7.453,5.284c1.635,2.787,1.979,6.012,0.973,9.083
					c-2.07,6.313-2.08,12.99-0.027,19.307l3.168,9.748c1.893,5.826-1.309,12.107-7.134,14l-9.937,3.229
					c-3.467,1.126-6.045,4.05-6.73,7.628l-7.998,41.749c-17.583-16.093-33.021-35.113-45.552-56.818
					C36.43,347.541,26.878,319.3,22.668,290.744L47.283,282.747z M21.173,240.48c0.028,0.434,0.083,0.865,0.166,1.291
					C21.258,241.369,21.202,240.936,21.173,240.48z M109.841,99.723c3.29,7.983,1.608,17.221-4.282,23.535l-11.763,12.603
					c-0.525,0.563-0.984,1.185-1.367,1.853L65.717,184.35l-23.741,16.976c-4.422,3.162-5.508,9.275-2.446,13.767l8.879,13.024
					c-5.118,0.762-9.711,1.39-12.765,1.723c-0.587-0.563-1.201-1.134-1.836-1.724c-2.377-2.208-5.68-5.157-10.604-9.466
					c8.121-50.263,32.341-97.615,70.433-133.76C100.932,87.185,106.917,92.627,109.841,99.723z M209.459,174.757
					c3.029-0.107,5.891-0.209,8.447-0.423c1.349-0.113,2.847-0.092,4.26,0.018c-0.631,1.62-0.836,3.398-0.562,5.162
					c0.481,3.103,2.394,5.798,5.162,7.279c1.876,1.004,4.487,2.745,7.251,4.588c7.815,5.21,16.675,11.115,24.996,11.645
					c7.568,0.491,11.779-3.822,13.583-5.66c0.144-0.146,0.28-0.292,0.424-0.425c1.016-0.828,1.968-1.938,2.676-3.277
					c1.599,0.457,3.279,0.912,5.001,1.379c5.921,1.603,16.941,4.587,19.377,7.167c4.325,4.585,7.696,13.312,10.671,21.011
					c1.503,3.891,2.923,7.563,4.516,10.968c0.684,1.461,1.357,2.966,2.041,4.49c4.614,10.292,9.844,21.958,20.939,29.21
					c5.031,3.289,11.198,4.234,16.64,5.069c0.658,0.101,1.412,0.217,2.178,0.343c-3.23,4.506-7.829,8.788-12.688,13.313
					c-12.379,11.528-27.785,25.876-20.69,48.765c3.349,10.808,3.505,11.976-1.88,17.834c-0.734,0.799-1.418,1.527-2.059,2.209
					c-4.612,4.91-8.255,8.788-11.271,18.288c-0.876,2.759-2.011,4.037-4.072,6.357c-1.648,1.856-3.701,4.168-5.595,7.408
					c-2.268,3.882-3.018,7.62-3.619,10.623c-0.593,2.955-0.929,4.438-2.089,5.863c-2.641,3.242-7.567,7.95-12.624,11.163
					c-4.7,2.984-7.444,3.392-8.379,3.336c-1.067-1.144-4.932-6.152-10.772-23.486c-1.44-4.276-3.438-8.676-5.37-12.931
					c-4.259-9.38-8.662-19.08-6.52-25.709c0.253-0.782,0.503-1.546,0.749-2.293c3.422-10.43,6.652-20.279,0.668-34.619
					c-1.822-4.367-4.723-7.558-7.28-10.374c-1.655-1.821-3.53-3.885-3.819-5.073c-0.352-1.449-0.341-3.122-0.328-5.059
					c0.034-5.225,0.086-13.12-7.763-20.47c-11.066-10.358-23.97-7.167-32.51-5.055c-2.623,0.648-5.101,1.262-7.297,1.52
					c-14.048,1.646-26.59-3.654-34.42-14.55c-8.191-11.397-9.38-26.734-3.102-40.024c3.039-6.431,7.63-11.598,12.946-17.578
					c1.161-1.307,2.333-2.625,3.505-3.975c1.95-2.248,4.096-5.292,6.365-8.515c2.711-3.848,7.755-11.007,9.945-12.369
					C191.549,175.392,201.901,175.025,209.459,174.757z"/>
				<path d="M374.048,422.722c10.2-1.667,17.868-12.277,24.134-33.393l11.762-39.642c0.522-1.762,0.55-3.634,0.078-5.41l-4.811-18.134
					c-1.051-3.96-4.411-6.878-8.478-7.364c-4.072-0.476-8.021,1.56-9.976,5.161c-1.096,2.02-2.083,4.16-3.037,6.229
					c-1.605,3.481-3.265,7.081-4.992,9.068c-0.97,1.116-3.462,2.319-5.87,3.481c-5.757,2.778-13.642,6.583-16.654,16.185
					c-1.87,5.956-1.172,10.668-0.662,14.108c0.441,2.983,0.543,4.017-0.256,5.893l-0.1,0.233c-3.183,7.469-9.105,21.374-0.801,33.195
					c5.925,8.436,12.155,10.605,16.996,10.605C372.327,422.94,373.221,422.857,374.048,422.722z M370.749,400.839
					c-1.911-2.722,0.945-9.426,2.835-13.863l0.101-0.234c3.048-7.154,2.233-12.648,1.64-16.66c-0.381-2.569-0.517-3.673-0.04-5.19
					c0.392-1.247,2.735-2.457,6.265-4.161c1.565-0.756,3.288-1.587,5.027-2.593l-7.566,25.502c-3.194,10.766-6.02,15.792-7.651,18.02
					C371.171,401.422,370.967,401.15,370.749,400.839z"/>
				<path d="M269.355,118.624c-5.207-1.824-10.917,0.915-12.745,6.126c-1.828,5.212,0.915,10.917,6.126,12.745l0.674,0.236
					c1.095,0.384,2.211,0.566,3.31,0.566c4.128,0,7.992-2.577,9.436-6.692c1.828-5.212-0.915-10.917-6.126-12.745L269.355,118.624z"/>
			</g>
			</svg>
			</div>
		</>
	)
}

export default SVGGlobe
