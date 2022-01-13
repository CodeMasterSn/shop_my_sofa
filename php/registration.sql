CREATE TABLE `users` (
    `ìd` int(11) NOT AUTO_INCREMENT PRIMARY KEY,
    `username` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL,
    `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;