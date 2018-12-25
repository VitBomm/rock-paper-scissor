<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Rock - Paper - Scissors</title>
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href= "css/styles.css"/>
</head>
<body>
	<header>
		<h1>Rock - Paper - Scissors</h1>
	</header>
	<div class="score-board">
		<div id ="user-label" class="badge">user</div>
		<div id ="computer-label" class="badge">comp</div>
		<span id="user-score">0</span>:<span id="computer-score">0 </span>
	</div>
		<div class="result">
			<p>Paper covers Rock. You Win!</p>
		</div>
		<div class="choices">
			<div id="r" class="choice">
				 <img
          width="48"
          height="48"
          src="images/rock2.jpeg"
        />
			</div>
			<div class="choice" id ="p">
				 <img
          width="48"
          height="48"
          src="images/paper.jpeg"
        />
			</div>
			<div class="choice" id ="s">
				 <img
          width="48"
          height="48"
          src="images/scissors.jpeg"
        />
			</div>
		</div>
		<div id="action-message">Make your move</div>
			<!-- JavaScript -->
		<script charset="utf-8" type="text/javascript" src="javascript/app.js"></script>
</body>
</html>
