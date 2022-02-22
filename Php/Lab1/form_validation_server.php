<html>

<head>
    <title> contact form </title>
</head>

<body>
    <h3> Contact Form </h3>
    <div>

    </div>
    <form id="form" action="#" method="POST">

        <div class="row">
            <label>Your name:</label><br />
            <input name="name" type="text" value="<?php echo isset($_POST["name"]) ? ($_POST["name"]) : ""; ?>" size="30" /><br />

        </div>
        <div class="row">
            <label>Your email:</label><br />
            <input name="email" type="text" value="<?php echo isset($_POST["email"]) ? ($_POST["email"]) : ""; ?>" size="30" /><br />

        </div>
        <div class="row">
            <label">Your message:</label><br />
                <textarea name="message" rows="7" cols="30"><?php echo isset($_POST["message"]) ? ($_POST["message"]) : ""; ?></textarea><br />

        </div>

        <input name="submit" type="submit" value="Send email" />
        <input name="clear" type="reset" value="clear form" />

    </form>

    <?php
    if (isset($_POST["submit"])) {

        $validated = true;

        if (empty($_POST["name"]) || !(strlen(trim($_POST["name"])) < 100)) {
            echo "Name is not valid!<br>";
            $validated = false;
        }
        if (empty($_POST["email"]) || !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
            echo "Email is not valid!<br>";
            $validated = false;
        }
        if (empty($_POST["message"]) && $_POST["message"] != 0) {
            echo "Message can't be empty!<br>";
            $validated = false;
        }
        if (strlen(trim($_POST["message"])) > 255) {
            echo "Message is too long!<br>";
            $validated = false;
        }

        if ($validated) {
            echo "<h3>Thank you for contacting Us</h3>";
            echo "<b>Name:</b> {$_POST["name"]}<br />";
            echo "<b>Email:</b> {$_POST["email"]}<br />";
            echo "<b>Name:</b> {$_POST["message"]}<br />";
            $_POST = array();
        }
    }
    ?>
</body>

</html>