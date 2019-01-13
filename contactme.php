<?php
$action=$_REQUEST['action'];

    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
          echo "<link rel='stylesheet' href='style.css'>";
          echo "<div class='contactform'>";
          echo "<h2><span class='highlight'>Required Fields</span> </h2>";
          echo "All fields are required, please fill <a href='http://www.tcnj.edu/~greenv2/#contact'>the form</a> again.";
          echo "</div>";
	    }
    else{
      $from="From: $name<$email>\r\nReturn-path: $email";
      $subject="Message sent using your contact form";
      mail("greenv2@tcnj.edu", $subject, $message, $from);

      echo "<link rel='stylesheet' href='style.css'>";
      echo  "<div class='contactform'>";
      echo "<h2><span class='highlight'>Email Sent!</span> </h2>";
      echo "<p>Thank you! Your message has been sent. <a href='http://www.tcnj.edu/~greenv2/#projects'>My Portfolio</a></p> ";
      echo "</div>";
	    }
?>
