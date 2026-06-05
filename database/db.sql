CREATE DATABASE constructora;
-- DROP DATABASE constructora; -- Descomenta esta línea para eliminar la base de datos si ya existe
USE constructora;

CREATE TABLE herramientas (
  idherramienta INT AUTO_INCREMENT PRIMARY KEY,
  nombre        VARCHAR(50) NOT NULL,
  marca        VARCHAR(50) NOT NULL,
  descripcion   VARCHAR(100) NOT NULL,
  fotografia     VARCHAR(10) NULL,
  condicion      ENUM('Bueno', 'Regular', 'Malo') NOT NULL DEFAULT 'Bueno',
  tipo           ENUM('Manual', 'Eléctrica') NOT NULL DEFAULT 'Eléctrica'
)ENGINE=InnoDB;

INSERT INTO herramientas (nombre, marca, descripcion, tipo) VALUES
('Alicates', 'Kamasa', 'Para trabajos electricos', 'Manual'),
('Destornillador', 'PB', 'Tipo cruz imantado', 'Manual');

INSERT INTO herramientas (nombre, marca, descripcion) VALUES
('Amoladora', 'Bosch', 'Sierra circular de 7-1/4 pulgadas'),
('Taladro', 'DeWalt', 'Lijadora orbital de 5 pulgadas');

SELECT * FROM herramientas;