package com.cibertec.backend.infrastructure.persistence.estante.entity;

import com.cibertec.backend.infrastructure.persistence.shared.Auditoria;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "estante")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EstanteEntity extends Auditoria<String> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_estante")
    private Long id;

    @Column(length = 10, nullable = false)
    private String descripcion;

    @Column(nullable = false)
    private Boolean estado;
}
