<?php

echo 'MD5 -> ' . md5('123');

echo '<br>';
echo '<br>';

echo 'HASH API -> ' . password_hash('123', PASSWORD_DEFAULT);