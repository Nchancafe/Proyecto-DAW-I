-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_palaciocamisas
-- ------------------------------------------------------
-- Server version	8.4.3

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
-- Table structure for table `camisa`
--

DROP TABLE IF EXISTS `camisa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `camisa` (
  `id_camisa` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) NOT NULL,
  `id_marca` int NOT NULL,
  `color` varchar(45) NOT NULL,
  `talla` varchar(10) NOT NULL,
  `manga` varchar(10) NOT NULL,
  `stock` int NOT NULL DEFAULT '0',
  `precio_costo` decimal(7,2) NOT NULL,
  `precio_venta` decimal(7,2) NOT NULL,
  `id_estante` int NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_creacion` varchar(50) NOT NULL,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_actualizacion` varchar(50) NOT NULL,
  PRIMARY KEY (`id_camisa`),
  KEY `fk_camisa_marca` (`id_marca`),
  KEY `fk_camisa_estante` (`id_estante`),
  CONSTRAINT `fk_camisa_estante` FOREIGN KEY (`id_estante`) REFERENCES `estante` (`id_estante`),
  CONSTRAINT `fk_camisa_marca` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id_marca`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `camisa`
--

LOCK TABLES `camisa` WRITE;
/*!40000 ALTER TABLE `camisa` DISABLE KEYS */;
INSERT INTO `camisa` VALUES (1,'Color-Entero',1,'Rojo','M','Corta',20,35.00,45.00,1,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(2,'Color-Entero',1,'Negro','L','Larga',25,40.00,50.00,2,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(3,'Rayas',1,'Negro/Rojo','S','Larga',15,35.00,45.00,3,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(4,'Cuadros',1,'Azul/Celeste','XL','Corta',18,40.00,50.00,4,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(5,'Color-Entero',3,'Blanco','M','Larga',30,35.00,45.00,5,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(6,'Color-Entero',3,'Verde','L','Corta',22,40.00,50.00,6,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(7,'Rayas',3,'Azul/Celeste','S','Corta',14,40.00,50.00,7,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(8,'Cuadros',3,'Negro/Blanco','XL','Larga',19,35.00,45.00,8,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(9,'Color-Entero',2,'Rojo','S','Corta',12,25.00,35.00,9,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(10,'Rayas',2,'Azul/Celeste','M','Larga',28,25.00,35.00,10,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(11,'Cuadros',2,'Verde/Negro','XL','Corta',32,25.00,35.00,11,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(12,'Color-Entero',2,'Blanco','L','Larga',18,25.00,35.00,12,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(13,'Color-Entero',4,'Negro','M','Larga',40,25.00,35.00,1,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(14,'Rayas',4,'Rojo/Blanco','S','Corta',15,25.00,35.00,2,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(15,'Cuadros',4,'Azul/Verde','XL','Larga',22,25.00,35.00,3,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(16,'Color-Entero',4,'Azul','L','Corta',19,25.00,35.00,4,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(17,'Color-Entero',5,'Negro','XL','Larga',35,65.00,75.00,5,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(18,'Rayas',5,'Rojo/Negro','M','Corta',16,65.00,75.00,6,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(19,'Cuadros',5,'Verde/Blanco','L','Larga',28,65.00,75.00,7,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(20,'Color-Entero',5,'Blanco','S','Corta',12,65.00,75.00,8,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(21,'Color-Entero',6,'Rojo','M','Larga',22,65.00,75.00,9,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(22,'Rayas',6,'Azul/Negro','L','Corta',18,65.00,75.00,10,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(23,'Cuadros',6,'Blanco/Negro','XL','Larga',30,65.00,75.00,11,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(24,'Color-Entero',6,'Verde','S','Corta',14,65.00,75.00,12,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(25,'Color-Entero',7,'Blanco','M','Corta',20,35.00,45.00,1,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(26,'Rayas',7,'Rojo/Azul','L','Larga',24,40.00,50.00,2,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(27,'Cuadros',7,'Negro/Verde','XL','Corta',16,40.00,50.00,3,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(28,'Color-Entero',7,'Negro','S','Larga',18,35.00,45.00,4,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(29,'Color-Entero',8,'Rojo','L','Corta',27,40.00,50.00,5,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(30,'Rayas',8,'Azul/Blanco','M','Larga',22,35.00,45.00,6,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(31,'Cuadros',8,'Verde/Negro','S','Corta',15,40.00,50.00,7,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(32,'Color-Entero',8,'Blanco','XL','Larga',29,35.00,45.00,8,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(33,'Color-Entero',9,'Negro','S','Corta',13,25.00,35.00,9,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(34,'Rayas',9,'Azul/Verde','M','Larga',19,25.00,35.00,10,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(35,'Cuadros',9,'Rojo/Blanco','L','Corta',21,25.00,35.00,11,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(36,'Color-Entero',9,'Blanco','XL','Larga',32,25.00,35.00,12,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(37,'Color-Entero',10,'Rojo','M','Larga',23,35.00,45.00,1,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(38,'Rayas',10,'Negro/Azul','L','Corta',18,40.00,50.00,2,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(39,'Cuadros',10,'Verde/Blanco','S','Larga',16,35.00,45.00,3,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(40,'Color-Entero',10,'Blanco','XL','Corta',27,40.00,50.00,4,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(41,'Color-Entero',11,'Negro','S','Larga',12,25.00,35.00,5,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(42,'Rayas',11,'Rojo/Azul','M','Corta',20,25.00,35.00,6,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(43,'Cuadros',11,'Blanco/Verde','L','Larga',28,25.00,35.00,7,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(44,'Color-Entero',11,'Azul','XL','Corta',15,25.00,35.00,8,1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin');
/*!40000 ALTER TABLE `camisa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estante`
--

DROP TABLE IF EXISTS `estante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estante` (
  `id_estante` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(10) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_creacion` varchar(50) NOT NULL,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_actualizacion` varchar(50) NOT NULL,
  PRIMARY KEY (`id_estante`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estante`
--

LOCK TABLES `estante` WRITE;
/*!40000 ALTER TABLE `estante` DISABLE KEYS */;
INSERT INTO `estante` VALUES (1,'A1',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(2,'A2',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(3,'A3',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(4,'A4',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(5,'B1',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(6,'B2',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(7,'B3',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(8,'B4',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(9,'C1',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(10,'C2',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(11,'C3',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(12,'C4',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin');
/*!40000 ALTER TABLE `estante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `id_marca` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_creacion` varchar(50) NOT NULL,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_actualizacion` varchar(50) NOT NULL,
  PRIMARY KEY (`id_marca`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Masterly',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(2,'Requena',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(3,'Morgan',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(4,'Nice',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(5,'John Holden',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(6,'John Jairo',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(7,'Cavalier',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(8,'Alexander',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(9,'Smith',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(10,'Galton',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin'),(11,'Doger',1,'2025-08-22 08:20:02','admin','2025-08-22 08:20:02','admin');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text,
  `activo` tinyint(1) DEFAULT '1',
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_creacion` varchar(50) NOT NULL,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_actualizacion` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN','Administrador del sistema',1,'2025-08-22 05:02:26','system','2025-08-22 05:02:26','system'),(2,'RRHH','Recursos Humanos',1,'2025-08-22 05:02:26','system','2025-08-22 05:02:26','system'),(3,'GERENTE','Gerente de área',1,'2025-08-22 05:02:26','system','2025-08-22 05:02:26','system'),(4,'SUPERVISOR','Supervisor de equipo',1,'2025-08-22 05:02:26','system','2025-08-22 05:02:26','system'),(5,'EMPLEADO','Empleado estándar',1,'2025-08-22 05:02:26','system','2025-08-22 05:02:26','system');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_roles`
--

DROP TABLE IF EXISTS `usuario_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `rol_id` int NOT NULL,
  `activo` tinyint(1) DEFAULT '1',
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_creacion` varchar(50) NOT NULL,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_actualizacion` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_usuario_rol` (`usuario_id`,`rol_id`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `usuario_roles_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  CONSTRAINT `usuario_roles_ibfk_2` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_roles`
--

LOCK TABLES `usuario_roles` WRITE;
/*!40000 ALTER TABLE `usuario_roles` DISABLE KEYS */;
INSERT INTO `usuario_roles` VALUES (1,1,1,1,'2025-08-22 05:02:26','system','2025-08-22 05:02:26','system'),(2,2,2,1,'2025-08-22 05:02:26','admin','2025-08-22 05:02:26','admin'),(3,3,3,1,'2025-08-22 05:02:26','admin','2025-08-22 05:02:26','admin'),(4,4,4,1,'2025-08-22 05:02:26','admin','2025-08-22 05:02:26','admin'),(5,5,1,1,'2025-08-22 07:21:27','system','2025-08-22 07:21:27','system');
/*!40000 ALTER TABLE `usuario_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `activo` tinyint(1) DEFAULT '1',
  `ultimo_acceso` timestamp NULL DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_creacion` varchar(50) NOT NULL,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_actualizacion` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_usuarios_username` (`username`),
  KEY `idx_usuarios_email` (`email`),
  KEY `idx_usuarios_activo` (`activo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'admin','admin@empresa.com','$2b$10$H4vyjttqc2bjOIxTyNRaO.Ghu19qH8GjaadfKZavPyTWH74.pGSiG','Admin','Sistema',1,NULL,'2025-08-22 05:02:26','system','2025-08-23 02:47:32','system'),(2,'rrhh_manager','rrhh@empresa.com','$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LeqgJ4J6jT6/pCKRG','Ana','García',1,NULL,'2025-08-22 05:02:26','admin','2025-08-22 05:02:26','admin'),(3,'gerente_ti','gerente.ti@empresa.com','$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LeqgJ4J6jT6/pCKRG','Carlos','Mendoza',1,NULL,'2025-08-22 05:02:26','admin','2025-08-22 05:02:26','admin'),(4,'supervisor_ventas','supervisor.ventas@empresa.com','$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LeqgJ4J6jT6/pCKRG','María','López',1,NULL,'2025-08-22 05:02:26','admin','2025-08-22 05:02:26','admin'),(5,'nayeli','nayeli@gmail.com','$2a$12$HoSY.wupt9OG.ji8tLxcEOSxSWMRx2GJdrqN9csq0ZdUOWLW6WyIG','Nayeli','Chancafe',1,NULL,'2025-08-22 07:21:27','system','2025-08-22 07:59:54','system');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bd_palaciocamisas'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-22 22:40:18
