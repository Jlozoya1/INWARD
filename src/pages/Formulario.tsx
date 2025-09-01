import { useState } from "react"
import {setDataWebhook} from "../api/api.ts"

export default function Formulario(){
  const [formData, setFormData] = useState({
    correoCliente: '',
    nombre: '',
    rfc: '',
    repLegal: '',
    fechaInicioOperaciones: '',
    actEconPrincipal: '',
    I1: '',
    II1: '',
    II1Op1: '',
    II1Op2: '',
    II1Op3: '',
    II2: '',
    II3: '',
    III1: '',
    III2: '',
    III3: '',
    III4: '',
    III5: '',
    IV1: '',
    IV2: '',
    IV3: '',
    V1: '',
    V2: '',
    VI1: '',
    VI2: '',
    VII1: '',
    VII2: '',
    VIII1: '',
    VIII2: '',
    VIII3: '',
    IX1: '',
    IX2: '',
    X1: '',
    X2: '',
    X3: '',
    X4: '',
    X5: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
    console.log(formData);
  };

  const [pagina, setPagina] = useState(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setDataWebhook(formData);
  };
  return(
    <>
      <div className="bg-black min-h-screen items-center flex justify-center">
        <div className="bg-[#1C1C1C] rounded-md p-8 w-4/5 text-white">
          <h1 className="text-white text-center text-3xl font-bold p-2">Formulario <span className="text-[#dc2626]">INWARD</span></h1>
          {pagina == 1 && (
            <p className="py-2 text-center">
              Nuestra firma se especializa en brindar servicios de prevención de lavado de dinero (PLD) y defensa fiscal, 
              ofreciendo soluciones legales y contables integrales que proporcionan certeza, legalidad y protección a nuestros 
              clientes ante cualquier acto de autoridad administrativa o penal.
              En cumplimiento de nuestras funciones de verificación y asesoría en materia de cumplimiento normativo, solicitamos su amable colaboración para proporcionarnos información y documentación que nos permita realizar un análisis respecto a si su empresa pudiera ser considerada sujeto obligado conforme a lo establecido en la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita (LFPIORPI), particularmente en lo relativo a la identificación de clientes y la presentación de avisos ante el Portal Anti lavado.
            </p>
          )}
          

          
          <form onSubmit={handleSubmit}>
            { pagina == 1 && (
              <div>
                <p className="py-3 font-semibold">Datos Generales del Sujeto Obligado:</p>
                <div className="mb-3">
                  <label htmlFor="name">Nombre o Razón Social:</label>
                  <input type="text" name="name" id="name" 
                    required={true}
                    className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition"
                    onChange={(e) => {setFormData({...formData, nombre: e.target.value})}}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="correo">Correo:</label>
                  <input type="text" name="correo" id="correo" 
                    required={true}
                    className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition"
                    onChange={(e) => {setFormData({...formData, correoCliente: e.target.value})}}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="rfc">RFC:</label>
                  <input type="text" id="rfc" name="rfc"
                    required={true}
                    className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition" 
                    value={formData?.rfc ||  ''}
                    onChange={(e) => setFormData({...formData, rfc: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="repLegal">Representante Legal:</label>
                  <input type="text" id="repLegal" name="repLegal"
                    required={true}
                    className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition" 
                    value={formData?.repLegal ||  ''}
                    onChange={(e) => setFormData({...formData, repLegal: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="fechaInicioOperaciones">Fecha de Inicio de Operaciones:</label>
                  <input type="date" id="fechaInicioOperaciones" name="fechaInicioOperaciones"
                    required={true}
                    className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition" 
                    value={formData?.fechaInicioOperaciones ||  ''}
                    onChange={(e) => setFormData({...formData, fechaInicioOperaciones: e.target.value})}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="actEconPrincipal">Actividad Economica Principal:</label>
                  <input type="text" id="actEconPrincipal" name="actEconPrincipal"
                    required={true}
                    className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition" 
                    value={formData?.actEconPrincipal ||  ''}
                    onChange={(e) => setFormData({...formData, actEconPrincipal: e.target.value})}
                  />
                </div>
              </div>
            )}

            {pagina == 2 && (
              <div>
                <p className="py-3 font-semibold">I.Actividades Económicas</p>
                <div className="mb-3">
                  <label htmlFor="I1">
                    1.¿Descripción de las actividades económicas que realiza la empresa objeto social y actividades efectivamente desarrolladas?
                  </label>
                  <input type="text" name="I1" id="I1" 
                    required={true}
                    className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition"
                    onChange={(e) => {setFormData({...formData, I1: e.target.value})}}
                  />
                </div>

                <p className="py-3 font-semibold">II. Registro y Obligaciones ante el Portal del SAT (SPPLD)</p>
                <div>
                  <label htmlFor="II2">1.	¿Se encuentra inscrito en el Portal de Prevención de Lavado de Dinero del SAT?</label>
                  <div>
                    <input
                      type="radio"
                      name="II1"
                      id="I2_si"
                      value="si"
                      checked={formData.II1 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="I2_si">Sí</label>
                  </div>

                  <div className="mb-3">
                    <input
                      type="radio"
                      name="II1"
                      id="I2_no"
                      value="no"
                      checked={formData.II1 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="I2_no">No</label>
                  </div>

                  {formData.II1 == "si" && (
                    <div>
                      <div className="mb-3">
                        <label htmlFor="II1Op1">¿Que actividades tiene registradas?</label>
                        <input type="text" id="II1Op1" name="II1Op1"
                          required={false}
                          className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition" 
                          value={formData?.II1Op1 ||  ''}
                          onChange={(e) => setFormData({...formData, II1Op1: e.target.value})}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="II1Op2">¿Actualiza sus datos en el portal cuando hay cambios relevantes?</label>
                        <div>
                          <input
                            type="radio"
                            name="II1Op2"
                            id="I2_si"
                            value="si"
                            checked={formData.II1Op2 === "si"}
                            onChange={handleChange}
                          />
                          <label htmlFor="I2_si">Sí</label>
                        </div>

                        <div >
                          <input
                            type="radio"
                            name="II1Op2"
                            id="I2_no"
                            value="no"
                            checked={formData.II1Op2 === "no"}
                            onChange={handleChange}
                          />
                          <label htmlFor="I2_no">No</label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="mb-3">
                          <label htmlFor="II1Op2">¿Actualiza sus datos en el portal cuando hay cambios relevantes?</label>
                          <div>
                            <input
                              type="radio"
                              name="II1Op3"
                              id="I2_si"
                              value="si"
                              checked={formData.II1Op3 === "si"}
                              onChange={handleChange}
                            />
                            <label htmlFor="I2_si">Sí</label>
                          </div>

                          <div >
                            <input
                              type="radio"
                              name="II1Op3"
                              id="I2_no"
                              value="no"
                              checked={formData.II1Op3 === "no"}
                              onChange={handleChange}
                            />
                            <label htmlFor="I2_no">No</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {pagina == 3 && (
              <div>
                <p className="py-3 font-semibold">III.Identificación del Cliente o Usuario</p>
                <div className="mb-3">
                  <label htmlFor="III1">
                    1.¿Cuenta con procedimientos para identificar a las autoridades o dependencias gubernamentales con las que contrata?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="III1"
                      id="III1_si"
                      value="si"
                      checked={formData.III1 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="III1_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="III1"
                      id="III1_no"
                      value="no"
                      checked={formData.III1 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="I2_no">No</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="III2">2.¿Conserva copia del contrato, documentación oficial del ente público y datos de los funcionarios responsables?</label>
                  <div>
                    <input type="radio" name="III2" id="III2_si" 
                      value="si"
                      checked={formData.III2 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="III2_si">Si</label>
                  </div>

                  <div>
                    <input type="radio" name="III2" id="III2_no" 
                      value="no"
                      checked={formData.III2 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="III2_no">No</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="III3">3.¿Identifica si el contrato es financiado con recursos públicos o mixtos?</label>
                  <div>
                    <input type="radio" name="III3" id="III3_si" 
                      value="si"
                      checked={formData.III3 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="III3_si">Si</label>
                  </div>

                  <div>
                    <input type="radio" name="III3" id="III3_no" 
                      value="no"
                      checked={formData.III3 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="III3_no">No</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="III4">4.¿Tiene expediente de los clientes con los q1ue realiza operaciones?</label>
                  <div>
                    <input type="radio" name="III4" id="III4_si" 
                      value="si"
                      checked={formData.III4 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="III4_si">Si</label>
                  </div>

                  <div>
                    <input type="radio" name="III4" id="III4_no" 
                      value="no"
                      checked={formData.III4 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="III4_no">No</label>
                  </div>
                </div>

                

                <div className="mb-3">
                  <label htmlFor="III5">5.¿Realiza operaciones con clientes que entren en la categoría: “PEP’s personas políticamente expuestas”?</label>
                  <div>
                    <input type="radio" name="III5" id="III5_si" 
                      value="si"
                      checked={formData.III5 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="III5_si">Si</label>
                  </div>

                  <div>
                    <input type="radio" name="III5" id="III5_no" 
                      value="no"
                      checked={formData.III5 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="III5_no">No</label>
                  </div>
                </div>

                <p className="py-2 text-center mb-1">
                  Nota:
                  Definición
                  Políticamente expuestas: Es alguien que ocupa o ha ocupado un cargo público de alto nivel, lo que la expone a un mayor riesgo de verse involucrada en actividades de corrupción o soborno. Estas personas, debido a su posición, pueden tener la capacidad de influir en decisiones gubernamentales o tener acceso a información privilegiada, lo que las convierte en un objetivo potencial para actividades ilícitas.
                </p>
              </div>
            )}

            {pagina == 4 && (
              <div>
                {formData.II1 == "si" && (
                  <div className="mb-3">
                    <p className="py-3 font-semibold">IV.Avisos</p>
                      <div className="mb-3">
                        <label htmlFor="IV1">
                          1.¿Presenta los avisos mensuales a través del portal del SAT cuando el monto del contrato rebasa el umbral aplicable?
                        </label>
                        <div>
                          <input
                            type="radio"
                            name="IV1"
                            id="IV1_si"
                            value="si"
                            checked={formData.IV1 === "si"}
                            onChange={handleChange}
                          />
                          <label htmlFor="IV1_si">Sí</label>
                        </div>

                        <div>
                          <input
                            type="radio"
                            name="IV1"
                            id="IV1_no"
                            value="no"
                            checked={formData.IV1 === "no"}
                            onChange={handleChange}
                          />
                          <label htmlFor="IV1_no">No</label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="IV2">
                          2.¿Ha presentado algún aviso extemporáneo o ha sido requerido por omisión?
                        </label>
                        <div>
                          <input
                            type="radio"
                            name="IV2"
                            id="IV2_si"
                            value="si"
                            checked={formData.IV2 === "si"}
                            onChange={handleChange}
                          />
                          <label htmlFor="IV2_si">Sí</label>
                        </div>

                        <div>
                          <input
                            type="radio"
                            name="IV2"
                            id="IV2_no"
                            value="no"
                            checked={formData.IV2 === "no"}
                            onChange={handleChange}
                          />
                          <label htmlFor="IV2_no">No</label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="IV3">
                          3.¿Cuenta con evidencia documental del envío oportuno de los avisos?
                        </label>
                        <div>
                          <input
                            type="radio"
                            name="IV3"
                            id="IV3_si"
                            value="si"
                            checked={formData.IV3 === "si"}
                            onChange={handleChange}
                          />
                          <label htmlFor="IV3_si">Sí</label>
                        </div>

                        <div>
                          <input
                            type="radio"
                            name="IV3"
                            id="IV2_no"
                            value="no"
                            checked={formData.IV3 === "no"}
                            onChange={handleChange}
                          />
                          <label htmlFor="IV3_no">No</label>
                        </div>
                      </div>
                  </div>
                )}
                <p className="py-3 font-semibold">V.	Manual de Cumplimiento</p>
                <div className="mb-3">
                  <label htmlFor="V1">
                    1.¿Cuenta con un Manual de Cumplimiento actualizado en materia de PLD/FT?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="V1"
                      id="V1_si"
                      value="si"
                      checked={formData.V1 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="V1_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="V1"
                      id="V1_no"
                      value="no"
                      checked={formData.V1 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="V1_no">No</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="V1">
                    2.¿Este manual incluye políticas específicas para operaciones con entes públicos?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="V2"
                      id="V2_si"
                      value="si"
                      checked={formData.V2 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="V2_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="V2"
                      id="V2_no"
                      value="no"
                      checked={formData.V2 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="V2_no">No</label>
                  </div>
                </div>
              </div>
            )}

            {pagina == 5 && (
              <div>
                <p className="py-3 font-semibold">VI.	Capacitación</p>
                <div className="mb-3">
                  <label htmlFor="VI1">
                    1.¿Ha capacitado al personal involucrado en el cumplimiento de las obligaciones PLD?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="VI1"
                      id="VI1_si"
                      value="si"
                      checked={formData.VI1 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VI1_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="VI1"
                      id="VI1_NO"
                      value="no"
                      checked={formData.VI1 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VI1_NO">No</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="VI1">
                    2.¿Lleva un registro o constancias de las capacitaciones impartidas?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="VI2"
                      id="VI2_si"
                      value="si"
                      checked={formData.VI2 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VI2_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="VI2"
                      id="VI2_NO"
                      value="no"
                      checked={formData.VI2 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VI2_NO">No</label>
                  </div>
                </div>

                <p className="py-3 font-semibold">VII.	Conservación de Información</p>
                <div className="mb-3">
                  <label htmlFor="VII1">
                    1.¿Conserva la documentación soporte de las operaciones, avisos y reportes por al menos 5 años?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="VII1"
                      id="VII1_si"
                      value="si"
                      checked={formData.VII1 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VII1_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="VII1"
                      id="VII1_NO"
                      value="no"
                      checked={formData.VII1 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VII1_NO">No</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="VII1">
                    2.¿Cuenta con un sistema de archivo físico o digital que permita localizar fácilmente los documentos requeridos por la autoridad?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="VII2"
                      id="VII2_si"
                      value="si"
                      checked={formData.VII2 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VII2_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="VII2"
                      id="VII2_NO"
                      value="no"
                      checked={formData.VII2 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VII2_NO">No</label>
                  </div>
                </div>

                <p className="py-3 font-semibold">VIII.	Auditoría y Revisión Interna</p>
                <div className="mb-3">
                  <label htmlFor="VII1">
                    1.¿Ha sido objeto de auditoría interna o externa en materia de PLD?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="VIII1"
                      id="VIII1_si"
                      value="si"
                      checked={formData.VIII1 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VIII1_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="VIII1"
                      id="VIII1_NO"
                      value="no"
                      checked={formData.VIII1 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VIII1_NO">No</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="VII1">
                    2.¿Ha recibido visitas de verificación por parte del SAT o la UIF?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="VIII2"
                      id="VIII2_si"
                      value="si"
                      checked={formData.VIII2 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VIII1_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="VIII2"
                      id="VIII2_NO"
                      value="no"
                      checked={formData.VIII2 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="VIII2_NO">No</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="VIII3">3.	En caso afirmativo, ¿hubo observaciones relevantes? ¿Fueron atendidas?</label>
                  <input type="text" id="VIII3" name="VIII3"
                    required={false}
                    className="mt-2 w-full rounded-md bg-white/5 px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-[#dc2626] transition" 
                    value={formData?.VIII3 ||  ''}
                    onChange={(e) => setFormData({...formData, VIII3: e.target.value})}
                  />
                </div>
              </div>
            )}

            {pagina == 6 && (
              <div>
                <p className="py-3 font-semibold">IX.	Evaluación de Riesgos y Operaciones Sospechosas</p>
                <div className="mb-3">
                  <label htmlFor="IX">
                    1.¿Realiza evaluaciones de riesgo respecto al perfil del cliente (ente público) o los contratos celebrados?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="IX1"
                      id="IX_si"
                      value="si"
                      checked={formData.IX1 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="IX_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="IX1"
                      id="IX1_NO"
                      value="no"
                      checked={formData.IX1 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="IX1_NO">No</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="IX">
                    2.¿Ha detectado operaciones inusuales, relevantes o preocupantes en sus relaciones con gobiernos?
                  </label>
                  <div>
                    <input
                      type="radio"
                      name="IX2"
                      id="IX2_si"
                      value="si"
                      checked={formData.IX2 === "si"}
                      onChange={handleChange}
                    />
                    <label htmlFor="IX2_si">Sí</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="IX2"
                      id="IX2_NO"
                      value="no"
                      checked={formData.IX2 === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="IX2_NO">No</label>
                  </div>
                </div>
              </div>
            )}
            
            {pagina == 7 ? 
              <div className="flex items-center justify-center mt-3 ">
                <button type="submit" className="px-3 py-2 rounded-md bg-[#dc2626] text-white/90 cursor-pointer hover:bg-red-700">Enviar Datos</button>
              </div>
              : 
              <div className="flex items-center justify-center mt-3 gap-3">
                {pagina != 1 && (
                  <button type="button" onClick={() => setPagina(pagina - 1)} className="px-3 py-2 rounded-md bg-[#508b4a] text-white/90 cursor-pointer hover:bg-[#5f9b58]">Pagina Anterior</button>
                )}
                <button type="button" className="px-3 py-2 rounded-md bg-[#dc2626] text-white/90 cursor-pointer hover:bg-red-700"
                  onClick={() => setPagina(pagina + 1)}>
                  Siguiente Pagina
                </button>
              </div>
            }

          </form>
        </div>
      </div>
    </>
  )
}