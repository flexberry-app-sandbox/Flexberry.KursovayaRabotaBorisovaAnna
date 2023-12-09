package Kursovaya_rabota_Borisova_Anna.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_rabota_Borisova_Anna.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Должности
 */
@Entity(name = "IISKursovaya_rabota_Borisova_AnnaДолжности")
@Table(schema = "public", name = "Должности")
public class Dolzhnosti {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Должность")
    private String должность;

    @Column(name = "КодДолжности")
    private Integer коддолжности;


    public Dolzhnosti() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getДолжность() {
      return должность;
    }

    public void setДолжность(String должность) {
      this.должность = должность;
    }

    public Integer getКодДолжности() {
      return коддолжности;
    }

    public void setКодДолжности(Integer коддолжности) {
      this.коддолжности = коддолжности;
    }


}