package com.cibertec.backend.infrastructure.persistence.camisa.entity;

import com.cibertec.backend.infrastructure.persistence.shared.Auditoria;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "camisa")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CamisaEntity extends Auditoria<String> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 45, nullable = false)
    private String descripcion;

    @Column(name = "id_marca", nullable = false)
    private Long marcaId;

    @Column(length = 45, nullable = false)
    private String color;

    @Column(length = 10, nullable = false)
    private String talla;

    @Column(length = 10, nullable = false)
    private String manga;

    @Column(nullable = false)
    private Integer stock;

    @Column(name = "precio_costo", precision = 7, scale = 2, nullable = false)
    private BigDecimal precioCosto;

    @Column(name = "precio_venta", precision = 7, scale = 2, nullable = false)
    private BigDecimal precioVenta;

    @Column(name = "id_estante", nullable = false)
    private Long estanteId;

    @Column(nullable = false)
    private Boolean estado;
}
