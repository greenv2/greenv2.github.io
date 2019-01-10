<?php
$action=$_REQUEST['action'];

    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
		echo "All fields are required, please fill <a href='http://www.tcnj.edu/~greenv2/portfolio/portfolio#contactme'>the form</a> again.";
	    }
    else{
	    $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
		mail("greenv2@tcnj.edu", $subject, $message, $from);
    echo '<script language="javascript">';
    echo 'alert("message successfully sent")';
echo '</script>';
	    }
?>
