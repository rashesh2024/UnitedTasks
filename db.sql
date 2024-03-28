-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: studentDB_27feb
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `studentDB_27feb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `studentDB_27feb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `studentDB_27feb`;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `std_id` int NOT NULL,
  `atd_date` date NOT NULL,
  `is_atended` tinyint DEFAULT NULL,
  PRIMARY KEY (`atd_date`,`std_id`),
  KEY `fk_attendance_1_idx` (`std_id`),
  CONSTRAINT `fk_attendance_1` FOREIGN KEY (`std_id`) REFERENCES `student_master` (`std_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES (100,'2024-01-01',1),(101,'2024-01-01',1),(102,'2024-01-01',1);

/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_master`
--

DROP TABLE IF EXISTS `exam_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exam_master` (
  `exam_id` int NOT NULL,
  `exam_type` enum('Terminal','Prelims','Final') DEFAULT NULL,
  PRIMARY KEY (`exam_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_master`
--

LOCK TABLES `exam_master` WRITE;
/*!40000 ALTER TABLE `exam_master` DISABLE KEYS */;
INSERT INTO `exam_master` VALUES (101,'Terminal'),(102,'Prelims'),(103,'Final');
/*!40000 ALTER TABLE `exam_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result`
--

DROP TABLE IF EXISTS `result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result` (
  `exam_id` int DEFAULT NULL,
  `sub_id` int DEFAULT NULL,
  `std_id` int DEFAULT NULL,
  `theoryMarks` int DEFAULT NULL,
  `practicalMarks` int DEFAULT NULL,
  KEY `result_ibfk_3` (`exam_id`),
  KEY `result_ibfk_1` (`std_id`),
  KEY `result_ibfk_2` (`sub_id`),
  CONSTRAINT `result_ibfk_1` FOREIGN KEY (`std_id`) REFERENCES `student_master` (`std_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `result_ibfk_2` FOREIGN KEY (`sub_id`) REFERENCES `subject_master` (`sub_id`),
  CONSTRAINT `result_ibfk_3` FOREIGN KEY (`exam_id`) REFERENCES `exam_master` (`exam_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result`
--

LOCK TABLES `result` WRITE;
/*!40000 ALTER TABLE `result` DISABLE KEYS */;
INSERT INTO `result` VALUES (101,60,100,23,13),(102,60,100,23,13),(103,60,100,63,23),(101,50,100,23,13),(102,50,100,23,13),(103,50,100,63,23),(101,40,100,23,13);

/*!40000 ALTER TABLE `result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_master`
--

DROP TABLE IF EXISTS `student_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_master` (
  `std_id` int NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`std_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_master`
--

LOCK TABLES `student_master` WRITE;
/*!40000 ALTER TABLE `student_master` DISABLE KEYS */;
INSERT INTO `student_master` VALUES (100,'Celestyna','Erlandson','Celestyna.Erlandson@yopmail.com','Female'),(101,'Alex','Dosia','Alex.Dosia@yopmail.com','Male'),(102,'Dorice','Poppy','Dorice.Poppy@yopmail.com','Female'),(103,'Reeba','Nahum','Reeba.Nahum@yopmail.com','Male'),(104,'Rhea','Gino','Rhea.Gino@yopmail.com','Male'),(105,'Britni','Mendez','Britni.Mendez@yopmail.com','Male')

/*!40000 ALTER TABLE `student_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject_master`
--

DROP TABLE IF EXISTS `subject_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject_master` (
  `sub_id` int NOT NULL AUTO_INCREMENT,
  `sub_name` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`sub_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject_master`
--

LOCK TABLES `subject_master` WRITE;
/*!40000 ALTER TABLE `subject_master` DISABLE KEYS */;
INSERT INTO `subject_master` VALUES (10,'Python'),(20,'DSA'),(30,'ADPF'),(40,'DOTNET'),(50,'PHP'),(60,'DBMS');
/*!40000 ALTER TABLE `subject_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `StudentDB_26Feb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `StudentDB_26Feb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `StudentDB_26Feb`;

--
-- Table structure for table `student_master`
--

DROP TABLE IF EXISTS `student_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_master` (
  `std_id` int NOT NULL DEFAULT '0',
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `department` varchar(4) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(12) DEFAULT NULL,
  `ZipCode` varchar(2) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `dob` text,
  `bloodgroup` varchar(15) DEFAULT NULL,
  `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_master`
--

LOCK TABLES `student_master` WRITE;
/*!40000 ALTER TABLE `student_master` DISABLE KEYS */;
INSERT INTO `student_master` VALUES (100,'Oralee','Codding','Oralee.Codding@yopmail.com','mcom','Jerusalem','Uttarpradesh','TM','Turks and Caicos Islands','1948-05-25','B+','2024-02-16 07:22:06.180969');

/*!40000 ALTER TABLE `student_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `job_app_db_29`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `job_app_db_29` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `job_app_db_29`;

--
-- Table structure for table `Technology`
--

DROP TABLE IF EXISTS `Technology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Technology` (
  `emp_id` int NOT NULL,
  `tech_name` varchar(10) DEFAULT NULL,
  `level` varchar(45) DEFAULT NULL,
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `Technology_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Technology`
--

LOCK TABLES `Technology` WRITE;
/*!40000 ALTER TABLE `Technology` DISABLE KEYS */;

/*!40000 ALTER TABLE `Technology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) NOT NULL,
  `state_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `state_id` (`state_id`)
) ENGINE=InnoDB AUTO_INCREMENT=604 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'North and Middle Andaman',32),(2,'South Andaman',32),(3,'Nicobar',32),(4,'Adilabad',1),(5,'Anantapur',1),(6,'Chittoor',1),(7,'East Godavari',1),(8,'Guntur',1),(9,'Hyderabad',1),(10,'Kadapa',1),(11,'Karimnagar',1),(12,'Khammam',1),(13,'Krishna',1),(14,'Kurnool',1),(15,'Mahbubnagar',1),(16,'Medak',1),(17,'Nalgonda',1),(18,'Nellore',1),(19,'Nizamabad',1),(20,'Prakasam',1),(21,'Rangareddi',1),(22,'Srikakulam',1),(23,'Vishakhapatnam',1),(24,'Vizianagaram',1),(25,'Warangal',1),(26,'West Godavari',1),(27,'Anjaw',3),(28,'Changlang',3),(29,'East Kameng',3),(30,'Lohit',3),(31,'Lower Subansiri',3),(32,'Papum Pare',3),(33,'Tirap',3),(34,'Dibang Valley',3),(35,'Upper Subansiri',3),(36,'West Kameng',3),(37,'Barpeta',2),(38,'Bongaigaon',2),(39,'Cachar',2),(40,'Darrang',2),(41,'Dhemaji',2),(42,'Dhubri',2),(43,'Dibrugarh',2),(44,'Goalpara',2),(45,'Golaghat',2),(46,'Hailakandi',2),(47,'Jorhat',2),(48,'Karbi Anglong',2),(49,'Karimganj',2),(50,'Kokrajhar',2),(51,'Lakhimpur',2),(52,'Marigaon',2),(53,'Nagaon',2),(54,'Nalbari',2),(55,'North Cachar Hills',2),(56,'Sibsagar',2),(57,'Sonitpur',2),(58,'Tinsukia',2),(59,'Araria',4),(60,'Aurangabad',4),(61,'Banka',4),(62,'Begusarai',4),(63,'Bhagalpur',4),(64,'Bhojpur',4),(65,'Buxar',4),(66,'Darbhanga',4),(67,'Purba Champaran',4),(68,'Gaya',4),(69,'Gopalganj',4),(70,'Jamui',4),(71,'Jehanabad',4),(72,'Khagaria',4),(73,'Kishanganj',4),(74,'Kaimur',4),(75,'Katihar',4),(76,'Lakhisarai',4),(77,'Madhubani',4),(78,'Munger',4),(79,'Madhepura',4),(80,'Muzaffarpur',4),(81,'Nalanda',4),(82,'Nawada',4),(83,'Patna',4),(84,'Purnia',4),(85,'Rohtas',4),(86,'Saharsa',4),(87,'Samastipur',4),(88,'Sheohar',4),(89,'Sheikhpura',4),(90,'Saran',4),(91,'Sitamarhi',4),(92,'Supaul',4),(93,'Siwan',4),(94,'Vaishali',4),(95,'Pashchim Champaran',4),(96,'Bastar',36),(97,'Bilaspur',36),(98,'Dantewada',36),(99,'Dhamtari',36),(100,'Durg',36),(101,'Jashpur',36),(102,'Janjgir-Champa',36),(103,'Korba',36),(104,'Koriya',36),(105,'Kanker',36),(106,'Kawardha',36),(107,'Mahasamund',36),(108,'Raigarh',36),(109,'Rajnandgaon',36),(110,'Raipur',36),(111,'Surguja',36),(112,'Diu',29),(113,'Daman',29),(114,'Central Delhi',25),(115,'East Delhi',25),(116,'New Delhi',25),(117,'North Delhi',25),(118,'North East Delhi',25),(119,'North West Delhi',25),(120,'South Delhi',25),(121,'South West Delhi',25),(122,'West Delhi',25),(123,'North Goa',26),(124,'South Goa',26),(125,'Ahmedabad',5),(126,'Amreli District',5),(127,'Anand',5),(128,'Banaskantha',5),(129,'Bharuch',5),(130,'Bhavnagar',5),(131,'Dahod',5),(132,'The Dangs',5),(133,'Gandhinagar',5),(134,'Jamnagar',5),(135,'Junagadh',5),(136,'Kutch',5),(137,'Kheda',5),(138,'Mehsana',5),(139,'Narmada',5),(140,'Navsari',5),(141,'Patan',5),(142,'Panchmahal',5),(143,'Porbandar',5),(144,'Rajkot',5),(145,'Sabarkantha',5),(146,'Surendranagar',5),(147,'Surat',5),(148,'Vadodara',5),(149,'Valsad',5),(150,'Ambala',6),(151,'Bhiwani',6),(152,'Faridabad',6),(153,'Fatehabad',6),(154,'Gurgaon',6),(155,'Hissar',6),(156,'Jhajjar',6),(157,'Jind',6),(158,'Karnal',6),(159,'Kaithal',6),(160,'Kurukshetra',6),(161,'Mahendragarh',6),(162,'Mewat',6),(163,'Panchkula',6),(164,'Panipat',6),(165,'Rewari',6),(166,'Rohtak',6),(167,'Sirsa',6),(168,'Sonepat',6),(169,'Yamuna Nagar',6),(170,'Palwal',6),(171,'Bilaspur',7),(172,'Chamba',7),(173,'Hamirpur',7),(174,'Kangra',7),(175,'Kinnaur',7),(176,'Kulu',7),(177,'Lahaul and Spiti',7),(178,'Mandi',7),(179,'Shimla',7),(180,'Sirmaur',7),(181,'Solan',7),(182,'Una',7),(183,'Anantnag',8),(184,'Badgam',8),(185,'Bandipore',8),(186,'Baramula',8),(187,'Doda',8),(188,'Jammu',8),(189,'Kargil',8),(190,'Kathua',8),(191,'Kupwara',8),(192,'Leh',8),(193,'Poonch',8),(194,'Pulwama',8),(195,'Rajauri',8),(196,'Srinagar',8),(197,'Samba',8),(198,'Udhampur',8),(199,'Bokaro',34),(200,'Chatra',34),(201,'Deoghar',34),(202,'Dhanbad',34),(203,'Dumka',34),(204,'Purba Singhbhum',34),(205,'Garhwa',34),(206,'Giridih',34),(207,'Godda',34),(208,'Gumla',34),(209,'Hazaribagh',34),(210,'Koderma',34),(211,'Lohardaga',34),(212,'Pakur',34),(213,'Palamu',34),(214,'Ranchi',34),(215,'Sahibganj',34),(216,'Seraikela and Kharsawan',34),(217,'Pashchim Singhbhum',34),(218,'Ramgarh',34),(219,'Bidar',9),(220,'Belgaum',9),(221,'Bijapur',9),(222,'Bagalkot',9),(223,'Bellary',9),(224,'Bangalore Rural District',9),(225,'Bangalore Urban District',9),(226,'Chamarajnagar',9),(227,'Chikmagalur',9),(228,'Chitradurga',9),(229,'Davanagere',9),(230,'Dharwad',9),(231,'Dakshina Kannada',9),(232,'Gadag',9),(233,'Gulbarga',9),(234,'Hassan',9),(235,'Haveri District',9),(236,'Kodagu',9),(237,'Kolar',9),(238,'Koppal',9),(239,'Mandya',9),(240,'Mysore',9),(241,'Raichur',9),(242,'Shimoga',9),(243,'Tumkur',9),(244,'Udupi',9),(245,'Uttara Kannada',9),(246,'Ramanagara',9),(247,'Chikballapur',9),(248,'Yadagiri',9),(249,'Alappuzha',10),(250,'Ernakulam',10),(251,'Idukki',10),(252,'Kollam',10),(253,'Kannur',10),(254,'Kasaragod',10),(255,'Kottayam',10),(256,'Kozhikode',10),(257,'Malappuram',10),(258,'Palakkad',10),(259,'Pathanamthitta',10),(260,'Thrissur',10),(261,'Thiruvananthapuram',10),(262,'Wayanad',10),(263,'Alirajpur',11),(264,'Anuppur',11),(265,'Ashok Nagar',11),(266,'Balaghat',11),(267,'Barwani',11),(268,'Betul',11),(269,'Bhind',11),(270,'Bhopal',11),(271,'Burhanpur',11),(272,'Chhatarpur',11),(273,'Chhindwara',11),(274,'Damoh',11),(275,'Datia',11),(276,'Dewas',11),(277,'Dhar',11),(278,'Dindori',11),(279,'Guna',11),(280,'Gwalior',11),(281,'Harda',11),(282,'Hoshangabad',11),(283,'Indore',11),(284,'Jabalpur',11),(285,'Jhabua',11),(286,'Katni',11),(287,'Khandwa',11),(288,'Khargone',11),(289,'Mandla',11),(290,'Mandsaur',11),(291,'Morena',11),(292,'Narsinghpur',11),(293,'Neemuch',11),(294,'Panna',11),(295,'Rewa',11),(296,'Rajgarh',11),(297,'Ratlam',11),(298,'Raisen',11),(299,'Sagar',11),(300,'Satna',11),(301,'Sehore',11),(302,'Seoni',11),(303,'Shahdol',11),(304,'Shajapur',11),(305,'Sheopur',11),(306,'Shivpuri',11),(307,'Sidhi',11),(308,'Singrauli',11),(309,'Tikamgarh',11),(310,'Ujjain',11),(311,'Umaria',11),(312,'Vidisha',11),(313,'Ahmednagar',12),(314,'Akola',12),(315,'Amrawati',12),(316,'Aurangabad',12),(317,'Bhandara',12),(318,'Beed',12),(319,'Buldhana',12),(320,'Chandrapur',12),(321,'Dhule',12),(322,'Gadchiroli',12),(323,'Gondiya',12),(324,'Hingoli',12),(325,'Jalgaon',12),(326,'Jalna',12),(327,'Kolhapur',12),(328,'Latur',12),(329,'Mumbai City',12),(330,'Mumbai suburban',12),(331,'Nandurbar',12),(332,'Nanded',12),(333,'Nagpur',12),(334,'Nashik',12),(335,'Osmanabad',12),(336,'Parbhani',12),(337,'Pune',12),(338,'Raigad',12),(339,'Ratnagiri',12),(340,'Sindhudurg',12),(341,'Sangli',12),(342,'Solapur',12),(343,'Satara',12),(344,'Thane',12),(345,'Wardha',12),(346,'Washim',12),(347,'Yavatmal',12),(348,'Bishnupur',13),(349,'Churachandpur',13),(350,'Chandel',13),(351,'Imphal East',13),(352,'Senapati',13),(353,'Tamenglong',13),(354,'Thoubal',13),(355,'Ukhrul',13),(356,'Imphal West',13),(357,'East Garo Hills',14),(358,'East Khasi Hills',14),(359,'Jaintia Hills',14),(360,'Ri-Bhoi',14),(361,'South Garo Hills',14),(362,'West Garo Hills',14),(363,'West Khasi Hills',14),(364,'Aizawl',15),(365,'Champhai',15),(366,'Kolasib',15),(367,'Lawngtlai',15),(368,'Lunglei',15),(369,'Mamit',15),(370,'Saiha',15),(371,'Serchhip',15),(372,'Dimapur',16),(373,'Kohima',16),(374,'Mokokchung',16),(375,'Mon',16),(376,'Phek',16),(377,'Tuensang',16),(378,'Wokha',16),(379,'Zunheboto',16),(380,'Angul',17),(381,'Boudh',17),(382,'Bhadrak',17),(383,'Bolangir',17),(384,'Bargarh',17),(385,'Baleswar',17),(386,'Cuttack',17),(387,'Debagarh',17),(388,'Dhenkanal',17),(389,'Ganjam',17),(390,'Gajapati',17),(391,'Jharsuguda',17),(392,'Jajapur',17),(393,'Jagatsinghpur',17),(394,'Khordha',17),(395,'Kendujhar',17),(396,'Kalahandi',17),(397,'Kandhamal',17),(398,'Koraput',17),(399,'Kendrapara',17),(400,'Malkangiri',17),(401,'Mayurbhanj',17),(402,'Nabarangpur',17),(403,'Nuapada',17),(404,'Nayagarh',17),(405,'Puri',17),(406,'Rayagada',17),(407,'Sambalpur',17),(408,'Subarnapur',17),(409,'Sundargarh',17),(410,'Karaikal',27),(411,'Mahe',27),(412,'Puducherry',27),(413,'Yanam',27),(414,'Amritsar',18),(415,'Bathinda',18),(416,'Firozpur',18),(417,'Faridkot',18),(418,'Fatehgarh Sahib',18),(419,'Gurdaspur',18),(420,'Hoshiarpur',18),(421,'Jalandhar',18),(422,'Kapurthala',18),(423,'Ludhiana',18),(424,'Mansa',18),(425,'Moga',18),(426,'Mukatsar',18),(427,'Nawan Shehar',18),(428,'Patiala',18),(429,'Rupnagar',18),(430,'Sangrur',18),(431,'Ajmer',19),(432,'Alwar',19),(433,'Bikaner',19),(434,'Barmer',19),(435,'Banswara',19),(436,'Bharatpur',19),(437,'Baran',19),(438,'Bundi',19),(439,'Bhilwara',19),(440,'Churu',19),(441,'Chittorgarh',19),(442,'Dausa',19),(443,'Dholpur',19),(444,'Dungapur',19),(445,'Ganganagar',19),(446,'Hanumangarh',19),(447,'Juhnjhunun',19),(448,'Jalore',19),(449,'Jodhpur',19),(450,'Jaipur',19),(451,'Jaisalmer',19),(452,'Jhalawar',19),(453,'Karauli',19),(454,'Kota',19),(455,'Nagaur',19),(456,'Pali',19),(457,'Pratapgarh',19),(458,'Rajsamand',19),(459,'Sikar',19),(460,'Sawai Madhopur',19),(461,'Sirohi',19),(462,'Tonk',19),(463,'Udaipur',19),(464,'East Sikkim',20),(465,'North Sikkim',20),(466,'South Sikkim',20),(467,'West Sikkim',20),(468,'Ariyalur',21),(469,'Chennai',21),(470,'Coimbatore',21),(471,'Cuddalore',21),(472,'Dharmapuri',21),(473,'Dindigul',21),(474,'Erode',21),(475,'Kanchipuram',21),(476,'Kanyakumari',21),(477,'Karur',21),(478,'Madurai',21),(479,'Nagapattinam',21),(480,'The Nilgiris',21),(481,'Namakkal',21),(482,'Perambalur',21),(483,'Pudukkottai',21),(484,'Ramanathapuram',21),(485,'Salem',21),(486,'Sivagangai',21),(487,'Tiruppur',21),(488,'Tiruchirappalli',21),(489,'Theni',21),(490,'Tirunelveli',21),(491,'Thanjavur',21),(492,'Thoothukudi',21),(493,'Thiruvallur',21),(494,'Thiruvarur',21),(495,'Tiruvannamalai',21),(496,'Vellore',21),(497,'Villupuram',21),(498,'Dhalai',22),(499,'North Tripura',22),(500,'South Tripura',22),(501,'West Tripura',22),(502,'Almora',33),(503,'Bageshwar',33),(504,'Chamoli',33),(505,'Champawat',33),(506,'Dehradun',33),(507,'Haridwar',33),(508,'Nainital',33),(509,'Pauri Garhwal',33),(510,'Pithoragharh',33),(511,'Rudraprayag',33),(512,'Tehri Garhwal',33),(513,'Udham Singh Nagar',33),(514,'Uttarkashi',33),(515,'Agra',23),(516,'Allahabad',23),(517,'Aligarh',23),(518,'Ambedkar Nagar',23),(519,'Auraiya',23),(520,'Azamgarh',23),(521,'Barabanki',23),(522,'Badaun',23),(523,'Bagpat',23),(524,'Bahraich',23),(525,'Bijnor',23),(526,'Ballia',23),(527,'Banda',23),(528,'Balrampur',23),(529,'Bareilly',23),(530,'Basti',23),(531,'Bulandshahr',23),(532,'Chandauli',23),(533,'Chitrakoot',23),(534,'Deoria',23),(535,'Etah',23),(536,'Kanshiram Nagar',23),(537,'Etawah',23),(538,'Firozabad',23),(539,'Farrukhabad',23),(540,'Fatehpur',23),(541,'Faizabad',23),(542,'Gautam Buddha Nagar',23),(543,'Gonda',23),(544,'Ghazipur',23),(545,'Gorkakhpur',23),(546,'Ghaziabad',23),(547,'Hamirpur',23),(548,'Hardoi',23),(549,'Mahamaya Nagar',23),(550,'Jhansi',23),(551,'Jalaun',23),(552,'Jyotiba Phule Nagar',23),(553,'Jaunpur District',23),(554,'Kanpur Dehat',23),(555,'Kannauj',23),(556,'Kanpur Nagar',23),(557,'Kaushambi',23),(558,'Kushinagar',23),(559,'Lalitpur',23),(560,'Lakhimpur Kheri',23),(561,'Lucknow',23),(562,'Mau',23),(563,'Meerut',23),(564,'Maharajganj',23),(565,'Mahoba',23),(566,'Mirzapur',23),(567,'Moradabad',23),(568,'Mainpuri',23),(569,'Mathura',23),(570,'Muzaffarnagar',23),(571,'Pilibhit',23),(572,'Pratapgarh',23),(573,'Rampur',23),(574,'Rae Bareli',23),(575,'Saharanpur',23),(576,'Sitapur',23),(577,'Shahjahanpur',23),(578,'Sant Kabir Nagar',23),(579,'Siddharthnagar',23),(580,'Sonbhadra',23),(581,'Sant Ravidas Nagar',23),(582,'Sultanpur',23),(583,'Shravasti',23),(584,'Unnao',23),(585,'Varanasi',23),(586,'Birbhum',24),(587,'Bankura',24),(588,'Bardhaman',24),(589,'Darjeeling',24),(590,'Dakshin Dinajpur',24),(591,'Hooghly',24),(592,'Howrah',24),(593,'Jalpaiguri',24),(594,'Cooch Behar',24),(595,'Kolkata',24),(596,'Malda',24),(597,'Midnapore',24),(598,'Murshidabad',24),(599,'Nadia',24),(600,'North 24 Parganas',24),(601,'South 24 Parganas',24),(602,'Purulia',24),(603,'Uttar Dinajpur',24);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education`
--

DROP TABLE IF EXISTS `education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education` (
  `edu_id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `Board_or_University` varchar(50) DEFAULT NULL,
  `Passing_Year` year DEFAULT NULL,
  `Percent` decimal(4,2) DEFAULT NULL,
  PRIMARY KEY (`edu_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `education_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;

UNLOCK TABLES;

--
-- Table structure for table `employe_master`
--

DROP TABLE IF EXISTS `employe_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employe_master` (
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(20) DEFAULT NULL,
  `lname` varchar(20) DEFAULT NULL,
  `designation` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `curr_add` varchar(100) DEFAULT NULL,
  `per_add` varchar(100) DEFAULT NULL,
  `city` varchar(15) DEFAULT NULL,
  `state` varchar(15) DEFAULT NULL,
  `zipcode` varchar(15) DEFAULT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `relationship` enum('Married','Unmarried') DEFAULT NULL,
  `dob` date DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employe_master`
--

LOCK TABLES `employe_master` WRITE;
/*!40000 ALTER TABLE `employe_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `employe_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language` (
  `lang_id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `lan_name` varchar(10) DEFAULT NULL,
  `can_read` tinyint(1) DEFAULT NULL,
  `can_write` tinyint(1) DEFAULT NULL,
  `can_speak` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`lang_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `language_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `option_master`
--

DROP TABLE IF EXISTS `option_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_master` (
  `opt_id` int NOT NULL AUTO_INCREMENT,
  `selection_id` int NOT NULL,
  `opt_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`opt_id`),
  KEY `selection_id` (`selection_id`),
  CONSTRAINT `option_master_ibfk_1` FOREIGN KEY (`selection_id`) REFERENCES `selection_master` (`selection_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option_master`
--

LOCK TABLES `option_master` WRITE;
/*!40000 ALTER TABLE `option_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `option_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preference`
--

DROP TABLE IF EXISTS `preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preference` (
  `pref_id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `pref_location` varchar(15) NOT NULL,
  `Notice_period` varchar(10) DEFAULT NULL,
  `Expected_ctc` varchar(10) DEFAULT NULL,
  `Current_ctc` varchar(10) DEFAULT NULL,
  `Department` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`pref_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `preference_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preference`
--

LOCK TABLES `preference` WRITE;
/*!40000 ALTER TABLE `preference` DISABLE KEYS */;
/*!40000 ALTER TABLE `preference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference`
--

DROP TABLE IF EXISTS `reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reference` (
  `ref_id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `ref_name` varchar(50) DEFAULT NULL,
  `ref_contact` varchar(15) DEFAULT NULL,
  `ref_relation` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`ref_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `reference_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference`
--

LOCK TABLES `reference` WRITE;
/*!40000 ALTER TABLE `reference` DISABLE KEYS */;
/*!40000 ALTER TABLE `reference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `selection_master`
--

DROP TABLE IF EXISTS `selection_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `selection_master` (
  `selection_id` int NOT NULL AUTO_INCREMENT,
  `selection_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`selection_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `selection_master`
--

LOCK TABLES `selection_master` WRITE;
/*!40000 ALTER TABLE `selection_master` DISABLE KEYS */;
INSERT INTO `selection_master` VALUES (1,'Education'),(2,'Languages'),(3,'Technologies'),(4,'Location'),(5,'Department');
/*!40000 ALTER TABLE `selection_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,'ANDHRA PRADESH'),(2,'ASSAM'),(3,'ARUNACHAL PRADESH'),(4,'BIHAR'),(5,'GUJRAT'),(6,'HARYANA'),(7,'HIMACHAL PRADESH'),(8,'JAMMU & KASHMIR'),(9,'KARNATAKA'),(10,'KERALA'),(11,'MADHYA PRADESH'),(12,'MAHARASHTRA'),(13,'MANIPUR'),(14,'MEGHALAYA'),(15,'MIZORAM'),(16,'NAGALAND'),(17,'ORISSA'),(18,'PUNJAB'),(19,'RAJASTHAN'),(20,'SIKKIM'),(21,'TAMIL NADU'),(22,'TRIPURA'),(23,'UTTAR PRADESH'),(24,'WEST BENGAL'),(25,'DELHI'),(26,'GOA'),(27,'PONDICHERY'),(28,'LAKSHDWEEP'),(29,'DAMAN & DIU'),(30,'DADRA & NAGAR'),(31,'CHANDIGARH'),(32,'ANDAMAN & NICOBAR'),(33,'UTTARANCHAL'),(34,'JHARKHAND'),(35,'CHATTISGARH');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_option`
--

DROP TABLE IF EXISTS `sub_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_option` (
  `opt_id` int NOT NULL,
  `sub_opt_id` int NOT NULL AUTO_INCREMENT,
  `sub_opt_name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`sub_opt_id`,`opt_id`),
  KEY `opt_id` (`opt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_option`
--

LOCK TABLES `sub_option` WRITE;
/*!40000 ALTER TABLE `sub_option` DISABLE KEYS */;
INSERT INTO `sub_option` VALUES (5,1,'Read'),(6,1,'Read'),(7,1,'Read'),(8,1,'Beginner'),(9,1,'Beginner'),(10,1,'Beginner'),(11,1,'Beginner'),(5,2,'Write'),(6,2,'Write'),(7,2,'Write'),(8,2,'Mediator'),(9,2,'Mediator'),(10,2,'Mediator'),(11,2,'Mediator'),(5,3,'Speak'),(6,3,'Speak'),(7,3,'Speak'),(8,3,'Expert'),(9,3,'Expert'),(10,3,'Expert'),(11,3,'Expert');
/*!40000 ALTER TABLE `sub_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_exp`
--

DROP TABLE IF EXISTS `work_exp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_exp` (
  `work_id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int DEFAULT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `Designation` varchar(50) DEFAULT NULL,
  `From_date` date DEFAULT NULL,
  `To_date` date DEFAULT NULL,
  PRIMARY KEY (`work_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `work_exp_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_exp`
--

LOCK TABLES `work_exp` WRITE;
/*!40000 ALTER TABLE `work_exp` DISABLE KEYS */;
/*!40000 ALTER TABLE `work_exp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `usersdb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `usersdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `usersdb`;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(500) NOT NULL,
  `saltKey` varchar(45) NOT NULL,
  `access_token` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` tinyint DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rashesh','Pithadiya','yakuba@gmail.com','1a3811f98d3f4f37291053bc56f51be9','se3&c','cI?>j!i?bVOX','2024-03-22 04:27:17',1),(2,'sdcvgsdfv','ASdxAWsdc','yakuba@1gmail.com','fb428be8880883857e26947ce8e6b0a5','0#?8X','Eca__s>7lkk7','2024-03-22 05:58:21',1),(3,'Rashesh','Pithadiya','random@gmail.com','6cc8853d64e3d57b7fd7bbe8543d3f72','p?>^E','3>s3ot^qSe%o','2024-03-22 05:59:11',1),(4,'ASdawsd','ASdxAWsdc','rashshshshs@gmail.com','1cf75499258df6158fe21f6cc7d4281d','c@37&','SXcp%T<$M@g7','2024-03-22 06:10:54',0),(5,'hero','heroine','hero@gmail.com','e26285956bd90d8a6f4683c73a37fdfc','B@0yu','oCn|}e}3Xp9p','2024-03-22 06:12:07',1),(6,'raj','tarapara','rahul@gmail.com','684c44b677df27b926cc54278df4d65b','5k4fF','$lf7!fFs}!KP','2024-03-22 06:15:09',1),(7,'87322','343242','ram@gmail.com','3964882aa78cd11d8205c28be65bc8fd','T$?N1','&zuUj7F+><HN','2024-03-22 09:54:44',1),(8,'rahu','ketu','rahurashesh@gmail.com','d7a0678911c9ed34db7c5eb4cc406964','MGecg','?8Y^Eh1FWf#C','2024-03-22 10:01:48',1),(9,'asd asdasd asdasd','asdasdasd','abc@sda.com','aaa11b229a14f9764edd70ad33486ae5','nr3Oh','_&rpIEs}%252','2024-03-22 12:59:44',1),(10,'Reeba','Deny','rebba@g.com','1d07cf54cd25ab0b8a74efeaac04a076','Ojtrt','y4VSu>pfEjwh','2024-03-22 13:01:38',1),(11,'Rashesh','Pithadiya','rashesh@gmail.com','1595548ae078157ed6a2f3e8bdaa5d4d','BYhZL','nYpHY|D7Rfwa','2024-03-22 13:40:06',1),(12,'Raj','Deny','qwertyu@asdfd.com','1c2d45b7831d4a5eb24ccb34d55fda99','r5i@c','YiBE9rzPm~jc','2024-03-26 04:41:30',1),(13,'user','user','user@gmail.com','0b7476b886b81e064c2128a60fdb806c','6fRo9','dW@BRWr7{F{>','2024-03-27 06:51:03',1),(14,'asdasdas','SDAFGM,HFAdfghdjfgf','sdfsdf@gmail.com','aeb74b80c8318e974b9db3edd44a7c28','Vr@XG','MdGFZBoQYf@i','2024-03-28 13:16:18',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `EmployeDB`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `EmployeDB` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `EmployeDB`;

--
-- Table structure for table `Technology_master`
--

DROP TABLE IF EXISTS `Technology_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Technology_master` (
  `tech_id` int NOT NULL AUTO_INCREMENT,
  `tech_name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`tech_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Technology_master`
--

LOCK TABLES `Technology_master` WRITE;
/*!40000 ALTER TABLE `Technology_master` DISABLE KEYS */;
INSERT INTO `Technology_master` VALUES (1,'PHP'),(2,'MySQL'),(3,'Laravel'),(4,'Oracle');
/*!40000 ALTER TABLE `Technology_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bachelor_education`
--

DROP TABLE IF EXISTS `bachelor_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bachelor_education` (
  `emp_id` int DEFAULT NULL,
  `bachelor_university_name` varchar(30) DEFAULT NULL,
  `bachelor_passing_year` year DEFAULT NULL,
  `bachelor_percentage` decimal(4,2) DEFAULT NULL,
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `bachelor_education_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bachelor_education`
--

LOCK TABLES `bachelor_education` WRITE;
/*!40000 ALTER TABLE `bachelor_education` DISABLE KEYS */;
INSERT INTO `bachelor_education` VALUES (1,'MSU',2022,74.10),(2,'MSU',2022,74.10),(3,'MSU',2022,74.10),(4,'MSU',2022,74.10),(5,'MSU',2022,74.10),(6,'MSU',2022,74.10),(7,'MSU',2022,74.10),(8,'MSU',2022,74.10),(9,'MSU',2022,74.10),(10,'MSU',2022,74.10),(11,'MSU',2022,74.10),(12,'MSU',2022,74.10),(13,'MSU',2022,74.10),(14,'MSU',2022,74.10),(15,'MSU',2022,74.10),(16,'MSU',2022,74.10),(17,'MSU',2022,74.10),(18,'MSU',2022,74.10),(19,'MSU',2022,74.10),(20,'MSU',2022,74.10),(21,'MSU',2022,74.10),(22,'MSU',2022,74.10),(23,'MSU',2022,74.10),(24,'MSU',2022,74.10),(25,'MSU',2022,74.10);
/*!40000 ALTER TABLE `bachelor_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education_master`
--

DROP TABLE IF EXISTS `education_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education_master` (
  `edu_id` int NOT NULL AUTO_INCREMENT,
  `edu_type` enum('SSC','HSC','Bachelor','Masters') DEFAULT NULL,
  PRIMARY KEY (`edu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_master`
--

LOCK TABLES `education_master` WRITE;
/*!40000 ALTER TABLE `education_master` DISABLE KEYS */;
INSERT INTO `education_master` VALUES (1,'SSC'),(2,'HSC'),(3,'Bachelor'),(4,'Masters');
/*!40000 ALTER TABLE `education_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp_lang_preference`
--

DROP TABLE IF EXISTS `emp_lang_preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_lang_preference` (
  `emp_id` int NOT NULL,
  `lang_id` int NOT NULL,
  `can_read` tinyint(1) DEFAULT NULL,
  `can_write` tinyint(1) DEFAULT NULL,
  `can_speak` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`emp_id`,`lang_id`),
  KEY `lang_id` (`lang_id`),
  CONSTRAINT `emp_lang_preference_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`),
  CONSTRAINT `emp_lang_preference_ibfk_2` FOREIGN KEY (`lang_id`) REFERENCES `language` (`lang_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp_lang_preference`
--

LOCK TABLES `emp_lang_preference` WRITE;
/*!40000 ALTER TABLE `emp_lang_preference` DISABLE KEYS */;
INSERT INTO `emp_lang_preference` VALUES (1,1,1,1,1),(1,2,1,1,1),(1,3,1,1,1),(2,1,1,1,1),(2,2,1,1,1),(2,3,1,1,1),(3,1,1,1,1),(3,2,1,1,1),(3,3,1,1,1),(4,1,1,1,1),(4,2,1,1,1),(4,3,1,1,1),(5,1,1,1,1),(5,2,1,1,1),(5,3,1,1,1),(6,1,1,1,1),(6,2,1,1,1),(6,3,1,1,1),(7,1,1,1,1),(7,2,1,1,1),(7,3,1,1,1),(8,1,1,1,1),(8,2,1,1,1),(8,3,1,1,1),(9,1,1,1,1),(9,2,1,1,1),(9,3,1,1,1),(10,1,1,1,1),(10,2,1,1,1),(10,3,1,1,1),(11,1,1,1,1),(11,2,1,1,1),(11,3,1,1,1),(12,1,1,1,1),(12,2,1,1,1),(12,3,1,1,1),(13,1,1,1,1),(13,2,1,1,1),(13,3,1,1,1),(14,1,1,1,1),(14,2,1,1,1),(14,3,1,1,1),(15,1,1,1,1),(15,2,1,1,1),(15,3,1,1,1),(16,1,1,1,1),(16,2,1,1,1),(16,3,1,1,1),(17,1,1,1,1),(17,2,1,1,1),(17,3,1,1,1),(18,1,1,1,1),(18,2,1,1,1),(18,3,1,1,1),(19,1,1,1,1),(19,2,1,1,1),(19,3,1,1,1),(20,1,1,1,1),(20,2,1,1,1),(20,3,1,1,1),(21,1,1,1,1),(21,2,1,1,1),(21,3,1,1,1),(22,1,1,1,1),(22,2,1,1,1),(22,3,1,1,1),(23,1,1,1,1),(23,2,1,1,1),(23,3,1,1,1),(24,1,1,1,1),(24,2,1,1,1),(24,3,1,1,1),(25,1,1,1,1),(25,2,1,1,1),(25,3,1,1,1);
/*!40000 ALTER TABLE `emp_lang_preference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employe_master`
--

DROP TABLE IF EXISTS `employe_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employe_master` (
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(20) DEFAULT NULL,
  `lname` varchar(20) DEFAULT NULL,
  `designation` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `curr_add` varchar(100) DEFAULT NULL,
  `per_add` varchar(100) DEFAULT NULL,
  `city` varchar(15) DEFAULT NULL,
  `state` varchar(15) DEFAULT NULL,
  `zipcode` varchar(15) DEFAULT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `relationship` enum('Married','Unmarried') DEFAULT NULL,
  `dob` date DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employe_master`
--

LOCK TABLES `employe_master` WRITE;
/*!40000 ALTER TABLE `employe_master` DISABLE KEYS */;
INSERT INTO `employe_master` VALUES (1,'Rashesh','Pithaddiya','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(2,'Shiva','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(3,'Shiva','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(4,'Sarasvati','Pithadiya','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(5,'Chandi','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(6,'Kali','Pithadiya','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(7,'Durga','Pithadiya','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(8,'Lakshmi','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Female','Unmarried','2002-08-14'),(9,'Balram','Pithadiya','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(10,'Gopal','Pithadiya','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(11,'Parth','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(12,'Mohan','Pithadiya','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(13,'Kano','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(14,'Krishna','Pithadiya','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(15,'Maruti','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(16,'Hanuman','Pithadiya','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(17,'Shatrugn','Shah','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(18,'Bharat','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(19,'Lakshman','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(20,'Ram','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(21,'Duryodhan','Shah','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(22,'Sahdev','Pithadiya','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(23,'Nakul','Patel','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(24,'Yudhishthir','Shah','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14'),(25,'Bhim','Shah','Developer','rashesh1234@gmail.com','9876543210','Triveni Park','Navneet Park','Vadodara','Gujarat','390006','Male','Unmarried','2002-08-14');
/*!40000 ALTER TABLE `employe_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hsc_education`
--

DROP TABLE IF EXISTS `hsc_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hsc_education` (
  `emp_id` int DEFAULT NULL,
  `hsc_board_name` varchar(30) DEFAULT NULL,
  `hsc_passing_year` year DEFAULT NULL,
  `hsc_percentage` decimal(4,2) DEFAULT NULL,
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `hsc_education_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hsc_education`
--

LOCK TABLES `hsc_education` WRITE;
/*!40000 ALTER TABLE `hsc_education` DISABLE KEYS */;
INSERT INTO `hsc_education` VALUES (1,'GSEB',2019,74.10),(2,'GSEB',2019,74.10),(3,'GSEB',2019,74.10),(4,'GSEB',2019,74.10),(5,'GSEB',2019,74.10),(6,'GSEB',2019,74.10),(7,'GSEB',2019,74.10),(8,'GSEB',2019,74.10),(9,'GSEB',2019,74.10),(10,'GSEB',2019,74.10),(11,'GSEB',2019,74.10),(12,'GSEB',2019,74.10),(13,'GSEB',2019,74.10),(14,'GSEB',2019,74.10),(15,'GSEB',2019,74.10),(16,'GSEB',2019,74.10),(17,'GSEB',2019,74.10),(18,'GSEB',2019,74.10),(19,'GSEB',2019,74.10),(20,'GSEB',2019,74.10),(21,'GSEB',2019,74.10),(22,'GSEB',2019,74.10),(23,'GSEB',2019,74.10),(24,'GSEB',2019,74.10),(25,'GSEB',2019,74.10);
/*!40000 ALTER TABLE `hsc_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language` (
  `lang_id` int NOT NULL AUTO_INCREMENT,
  `lang_name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`lang_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
INSERT INTO `language` VALUES (1,'Hindi'),(2,'English'),(3,'Gujarati');
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `masters_education`
--

DROP TABLE IF EXISTS `masters_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `masters_education` (
  `emp_id` int DEFAULT NULL,
  `masters_university_name` varchar(30) DEFAULT NULL,
  `masters_passing_year` year DEFAULT NULL,
  `masters_percentage` decimal(4,2) DEFAULT NULL,
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `masters_education_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `masters_education`
--

LOCK TABLES `masters_education` WRITE;
/*!40000 ALTER TABLE `masters_education` DISABLE KEYS */;
INSERT INTO `masters_education` VALUES (1,'DDU',2024,74.10),(2,'DDU',2024,74.10),(3,'DDU',2024,74.10),(4,'DDU',2024,74.10),(5,'DDU',2024,74.10),(6,'DDU',2024,74.10),(7,'DDU',2024,74.10),(8,'DDU',2024,74.10),(9,'DDU',2024,74.10),(10,'DDU',2024,74.10),(11,'DDU',2024,74.10),(12,'DDU',2024,74.10),(13,'DDU',2024,74.10),(14,'DDU',2024,74.10),(15,'DDU',2024,74.10),(16,'DDU',2024,74.10),(17,'DDU',2024,74.10),(18,'DDU',2024,74.10),(19,'DDU',2024,74.10),(20,'DDU',2024,74.10),(21,'DDU',2024,74.10),(22,'DDU',2024,74.10),(23,'DDU',2024,74.10),(24,'DDU',2024,74.10),(25,'DDU',2024,74.10);
/*!40000 ALTER TABLE `masters_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preference`
--

DROP TABLE IF EXISTS `preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preference` (
  `emp_id` int NOT NULL,
  `pref_location` varchar(15) NOT NULL,
  `Notice_period` varchar(10) DEFAULT NULL,
  `Expected_ctc` varchar(10) DEFAULT NULL,
  `Current_ctc` varchar(10) DEFAULT NULL,
  `Department` enum('Development','Sales','Management','Accounts','HR','Marketing','Designing') DEFAULT NULL,
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `preference_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preference`
--

LOCK TABLES `preference` WRITE;
/*!40000 ALTER TABLE `preference` DISABLE KEYS */;
INSERT INTO `preference` VALUES (1,'Vadodara','2 months','12 LPA','10 LPA','Development'),(2,'Vadodara','2 months','12 LPA','10 LPA','Development'),(3,'Vadodara','2 months','12 LPA','10 LPA','Development'),(4,'Vadodara','2 months','12 LPA','10 LPA','Development'),(5,'Vadodara','2 months','12 LPA','10 LPA','Development'),(6,'Vadodara','2 months','12 LPA','10 LPA','Development'),(7,'Vadodara','2 months','12 LPA','10 LPA','Development'),(8,'Vadodara','2 months','12 LPA','10 LPA','Development'),(9,'Vadodara','2 months','12 LPA','10 LPA','Development'),(10,'Vadodara','2 months','12 LPA','10 LPA','Development'),(11,'Vadodara','2 months','12 LPA','10 LPA','Development'),(12,'Vadodara','2 months','12 LPA','10 LPA','Development'),(13,'Vadodara','2 months','12 LPA','10 LPA','Development'),(14,'Vadodara','2 months','12 LPA','10 LPA','Development'),(15,'Vadodara','2 months','12 LPA','10 LPA','Development'),(16,'Vadodara','2 months','12 LPA','10 LPA','Development'),(17,'Vadodara','2 months','12 LPA','10 LPA','Development'),(18,'Vadodara','2 months','12 LPA','10 LPA','Development'),(19,'Vadodara','2 months','12 LPA','10 LPA','Development'),(20,'Vadodara','2 months','12 LPA','10 LPA','Development'),(21,'Vadodara','2 months','12 LPA','10 LPA','Development'),(22,'Vadodara','2 months','12 LPA','10 LPA','Development'),(23,'Vadodara','2 months','12 LPA','10 LPA','Development'),(24,'Vadodara','2 months','12 LPA','10 LPA','Development'),(25,'Vadodara','2 months','12 LPA','10 LPA','Development');
/*!40000 ALTER TABLE `preference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference`
--

DROP TABLE IF EXISTS `reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reference` (
  `ref_id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `ref_name` varchar(50) DEFAULT NULL,
  `ref_contact` varchar(15) DEFAULT NULL,
  `ref_relation` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`ref_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `reference_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference`
--

LOCK TABLES `reference` WRITE;
/*!40000 ALTER TABLE `reference` DISABLE KEYS */;
INSERT INTO `reference` VALUES (1,1,'Jay Shah','7410852045','Friend'),(2,2,'Jay Shah','7410852045','Friend'),(3,3,'Jay Shah','7410852045','Friend'),(4,4,'Jay Shah','7410852045','Friend'),(5,5,'Jay Shah','7410852045','Friend'),(6,6,'Jay Shah','7410852045','Friend'),(7,7,'Jay Shah','7410852045','Friend'),(8,8,'Jay Shah','7410852045','Friend'),(9,9,'Jay Shah','7410852045','Friend'),(10,10,'Jay Shah','7410852045','Friend'),(11,11,'Jay Shah','7410852045','Friend'),(12,12,'Jay Shah','7410852045','Friend'),(13,13,'Jay Shah','7410852045','Friend'),(14,14,'Jay Shah','7410852045','Friend'),(15,15,'Jay Shah','7410852045','Friend'),(16,16,'Jay Shah','7410852045','Friend'),(17,17,'Jay Shah','7410852045','Friend'),(18,18,'Jay Shah','7410852045','Friend'),(19,19,'Jay Shah','7410852045','Friend'),(20,20,'Jay Shah','7410852045','Friend'),(21,21,'Jay Shah','7410852045','Friend'),(22,22,'Jay Shah','7410852045','Friend'),(23,23,'Jay Shah','7410852045','Friend'),(24,24,'Jay Shah','7410852045','Friend'),(25,25,'Jay Shah','7410852045','Friend');
/*!40000 ALTER TABLE `reference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ssc_education`
--

DROP TABLE IF EXISTS `ssc_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ssc_education` (
  `emp_id` int DEFAULT NULL,
  `ssc_board_name` varchar(30) DEFAULT NULL,
  `ssc_passing_year` year DEFAULT NULL,
  `ssc_percentage` decimal(4,2) DEFAULT NULL,
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `ssc_education_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ssc_education`
--

LOCK TABLES `ssc_education` WRITE;
/*!40000 ALTER TABLE `ssc_education` DISABLE KEYS */;
INSERT INTO `ssc_education` VALUES (1,'GSEB',2017,74.10),(2,'GSEB',2017,74.10),(3,'GSEB',2017,74.10),(4,'GSEB',2017,74.10),(5,'GSEB',2017,74.10),(6,'GSEB',2017,74.10),(7,'GSEB',2017,74.10),(8,'GSEB',2017,74.10),(9,'GSEB',2017,74.10),(10,'GSEB',2017,74.10),(11,'GSEB',2017,74.10),(12,'GSEB',2017,74.10),(13,'GSEB',2017,74.10),(14,'GSEB',2017,74.10),(15,'GSEB',2017,74.10),(16,'GSEB',2017,74.10),(17,'GSEB',2017,74.10),(18,'GSEB',2017,74.10),(19,'GSEB',2017,74.10),(20,'GSEB',2017,74.10),(21,'GSEB',2017,74.10),(22,'GSEB',2017,74.10),(23,'GSEB',2017,74.10),(24,'GSEB',2017,74.10),(25,'GSEB',2017,74.10);
/*!40000 ALTER TABLE `ssc_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tech_level`
--

DROP TABLE IF EXISTS `tech_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tech_level` (
  `tech_lvl_id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `tech_id` int NOT NULL,
  `Beginer` tinyint(1) DEFAULT NULL,
  `Mideator` tinyint(1) DEFAULT NULL,
  `Expert` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`tech_lvl_id`),
  KEY `emp_id` (`emp_id`),
  KEY `tech_id` (`tech_id`),
  CONSTRAINT `tech_level_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`),
  CONSTRAINT `tech_level_ibfk_2` FOREIGN KEY (`tech_id`) REFERENCES `Technology_master` (`tech_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tech_level`
--

LOCK TABLES `tech_level` WRITE;
/*!40000 ALTER TABLE `tech_level` DISABLE KEYS */;
INSERT INTO `tech_level` VALUES (1,1,4,0,1,0),(2,1,3,0,1,0),(3,1,2,0,1,0),(4,1,1,0,1,0),(5,2,4,0,1,0),(6,2,3,0,1,0),(7,2,2,0,1,0),(8,2,1,0,1,0),(9,3,4,0,1,0),(10,3,3,0,1,0),(11,3,2,0,1,0),(12,3,1,0,1,0),(13,4,4,0,1,0),(14,4,3,0,1,0),(15,4,2,0,1,0),(16,4,1,0,1,0),(17,5,4,0,1,0),(18,5,3,0,1,0),(19,5,2,0,1,0),(20,5,1,0,1,0),(21,6,4,0,1,0),(22,6,3,0,1,0),(23,6,2,0,1,0),(24,6,1,0,1,0),(25,7,4,0,1,0),(26,7,3,0,1,0),(27,7,2,0,1,0),(28,7,1,0,1,0),(29,8,4,0,1,0),(30,8,3,0,1,0),(31,8,2,0,1,0),(32,8,1,0,1,0),(33,9,4,0,1,0),(34,9,3,0,1,0),(35,9,2,0,1,0),(36,9,1,0,1,0),(37,10,4,0,1,0),(38,10,3,0,1,0),(39,10,2,0,1,0),(40,10,1,0,1,0),(41,11,4,0,1,0),(42,11,3,0,1,0),(43,11,2,0,1,0),(44,11,1,0,1,0),(45,12,4,0,1,0),(46,12,3,0,1,0),(47,12,2,0,1,0),(48,12,1,0,1,0),(49,13,4,0,1,0),(50,13,3,0,1,0),(51,13,2,0,1,0),(52,13,1,0,1,0),(53,14,4,0,1,0),(54,14,3,0,1,0),(55,14,2,0,1,0),(56,14,1,0,1,0),(57,15,4,0,1,0),(58,15,3,0,1,0),(59,15,2,0,1,0),(60,15,1,0,1,0),(61,16,4,0,1,0),(62,16,3,0,1,0),(63,16,2,0,1,0),(64,16,1,0,1,0),(65,17,4,0,1,0),(66,17,3,0,1,0),(67,17,2,0,1,0),(68,17,1,0,1,0),(69,18,4,0,1,0),(70,18,3,0,1,0),(71,18,2,0,1,0),(72,18,1,0,1,0),(73,19,4,0,1,0),(74,19,3,0,1,0),(75,19,2,0,1,0),(76,19,1,0,1,0),(77,20,4,0,1,0),(78,20,3,0,1,0),(79,20,2,0,1,0),(80,20,1,0,1,0),(81,21,4,0,1,0),(82,21,3,0,1,0),(83,21,2,0,1,0),(84,21,1,0,1,0),(85,22,4,0,1,0),(86,22,3,0,1,0),(87,22,2,0,1,0),(88,22,1,0,1,0),(89,23,4,0,1,0),(90,23,3,0,1,0),(91,23,2,0,1,0),(92,23,1,0,1,0),(93,24,4,0,1,0),(94,24,3,0,1,0),(95,24,2,0,1,0),(96,24,1,0,1,0),(97,25,4,0,1,0),(98,25,3,0,1,0),(99,25,2,0,1,0),(100,25,1,0,1,0);
/*!40000 ALTER TABLE `tech_level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_exp`
--

DROP TABLE IF EXISTS `work_exp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_exp` (
  `emp_id` int DEFAULT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `Designation` varchar(50) DEFAULT NULL,
  `From_date` date DEFAULT NULL,
  `To_date` date DEFAULT NULL,
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `work_exp_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe_master` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_exp`
--

LOCK TABLES `work_exp` WRITE;
/*!40000 ALTER TABLE `work_exp` DISABLE KEYS */;
INSERT INTO `work_exp` VALUES (1,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(2,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(3,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(4,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(5,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(6,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(7,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(8,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(9,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(10,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(11,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(12,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(13,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(14,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(15,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(16,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(17,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(18,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(19,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(20,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(21,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(22,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(23,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(24,'Thinksense,ai','Designer','2021-12-27','2022-05-31'),(25,'Thinksense,ai','Designer','2021-12-27','2022-05-31');
/*!40000 ALTER TABLE `work_exp` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 19:08:37
