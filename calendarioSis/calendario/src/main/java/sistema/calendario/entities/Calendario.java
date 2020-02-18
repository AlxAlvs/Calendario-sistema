package sistema.calendario.entities;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "calendario")
public class Calendario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String descricao;
	
	private String hora_inicio;
	
	private String hora_termino;

	public Calendario() {
	}

	public Calendario(Integer id, String descricao, String hora_inicio, String hora_termino) {
		this.id = id;
		this.descricao = descricao;
		this.hora_inicio = hora_inicio;
		this.hora_termino = hora_termino;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getHora_inicio() {
		return hora_inicio;
	}

	public void setHora_inicio(String hora_inicio) {
		this.hora_inicio = hora_inicio;
	}

	public String getHora_termino() {
		return hora_termino;
	}

	public void setHora_termino(String hora_termino) {
		this.hora_termino = hora_termino;
	}
	
}
