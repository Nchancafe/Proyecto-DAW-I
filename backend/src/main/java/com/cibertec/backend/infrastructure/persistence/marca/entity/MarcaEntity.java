package com.cibertec.backend.infrastructure.persistence.marca.entity;

import com.cibertec.backend.infrastructure.persistence.shared.Auditoria;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "marca")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MarcaEntity extends Auditoria<String> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 45, nullable = false)
    private String descripcion;

    @Column(nullable = false)
    private Boolean estado;
}

