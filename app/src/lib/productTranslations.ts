import type { Product } from '../data/products';

interface ProductTranslation {
  descriptionEs: string;
  shortDescEs: string;
  detailsEs: string;
}

const pt: Record<string, ProductTranslation> = {
  'semaglutide-10mg': {
    descriptionEs: 'Agonista del Receptor GLP-1 — Control glucémico y pérdida de peso',
    shortDescEs: 'Referente entre los agonistas GLP-1 para investigación metabólica. Análogo de 31 aminoácidos con 94% de homología al GLP-1 humano endógeno.',
    detailsEs: 'La semaglutida es un agonista del receptor GLP-1 (péptido similar al glucagón-1). Mecanismo de acción: activa selectivamente los receptores GLP-1 estimulando la secreción insulínica glucodependiente, suprimiendo la secreción de glucagón, retrasando el vaciamiento gástrico y reduciendo el apetito mediante vías neurales centrales. El programa clínico STEP demostró una reducción del peso corporal del 15-20% a las 68 semanas con dosis de 2,4 mg.',
  },
  'tirzepatide-10mg': {
    descriptionEs: 'Agonista Dual GIP/GLP-1 — Resultados metabólicos superiores',
    shortDescEs: 'Novedoso agonista dual de los receptores GIP/GLP-1. Péptido de 39 aminoácidos con fracción de ácido graso diácido C20 para vida media prolongada.',
    detailsEs: 'La tirzepatida es un agonista dual de los receptores del polipéptido insulinotrópico dependiente de glucosa (GIP) y del péptido similar al glucagón-1 (GLP-1). El programa clínico SURPASS demostró reducciones de HbA1c superiores a todos los comparadores. Los ensayos SURMOUNT evidenciaron pérdida de peso del 15-22,5% en función de la dosis administrada.',
  },
  'retatrutide-10mg': {
    descriptionEs: 'Agonista Triple GIP/GLP-1/GCG — Eficacia máxima',
    shortDescEs: 'Primer agonista triple de receptores hormonales con acción simultánea sobre GIP, GLP-1 y receptores de glucagón.',
    detailsEs: 'La retatrutida (LY3437943) es el primer agonista triple de receptores hormonales de su clase. Los ensayos de Fase 2 demostraron una reducción media de peso sin precedentes del 24,2% a las 48 semanas con dosis de 12 mg (NEJM 2023). El triple agonismo incrementa el gasto energético más allá de lo observado con agonistas duales GLP-1/GIP.',
  },
  'liraglutide-10mg': {
    descriptionEs: 'Agonista GLP-1 — Investigación metabólica consolidada',
    shortDescEs: 'Agonista de primera generación del receptor GLP-1 con eficacia comprobada en el control glucémico y el manejo del peso corporal.',
    detailsEs: 'La liraglutida es un agonista del receptor GLP-1 ampliamente utilizado en investigación de diabetes y obesidad. Protocolo de dosificación diaria. Perfil de seguridad y eficacia clínica bien establecido en la literatura científica.',
  },
  'cagrilintide-5mg': {
    descriptionEs: 'Análogo de Amilina — Investigación de saciedad y peso',
    shortDescEs: 'Análogo sintético de amilina de acción prolongada para investigación en señalización de saciedad y homeostasis energética.',
    detailsEs: 'La cagrilintida es un análogo de amilina de acción prolongada que actúa sinérgicamente con los agonistas GLP-1. Los estudios demuestran potenciación de la pérdida de peso en combinación con semaglutida, con mecanismos complementarios sobre la regulación del apetito y la homeostasis energética.',
  },
  'survodutide-5mg': {
    descriptionEs: 'Agonista Dual GLP-1/GCG — Investigación emergente',
    shortDescEs: 'Novedoso agonista dual de los receptores GLP-1/glucagón para investigación metabólica avanzada.',
    detailsEs: 'La survodutida es un agonista dual de los receptores GLP-1/glucagón en desarrollo clínico avanzado. Muestra resultados prometedores en investigación de esteatohepatitis no alcohólica (NASH) y obesidad, con activación complementaria de ambas vías de señalización.',
  },
  'aod9604-5mg': {
    descriptionEs: 'Fragmento de HGH — Investigación lipolítica',
    shortDescEs: 'Fragmento 176-191 de la hormona de crecimiento humana. Estudiado por su actividad lipolítica sin interferencia sobre la glucemia.',
    detailsEs: 'El AOD-9604 es un fragmento modificado de la hormona de crecimiento humana (aminoácidos 176-191). La investigación se centra en sus potenciales efectos lipolíticos sin las propiedades alteradoras de la glucosa propias de la HGH completa, lo que lo convierte en objeto de estudio en protocolos de composición corporal.',
  },
  'bpc157-10mg': {
    descriptionEs: 'Compuesto de Protección Corporal — Regeneración tisular',
    shortDescEs: 'El "péptido Wolverine" — pentadecapéptido sintético de 15 aminoácidos con notables propiedades regenerativas tisulares.',
    detailsEs: 'El BPC-157 (Body Protection Compound-157) es un pentadecapéptido sintético de 15 aminoácidos derivado de una proteína protectora del jugo gástrico humano. Mecanismos: estimulación de la angiogénesis vía upregulación de VEGF, modulación de la vía del óxido nítrico, regulación de citoquinas antiinflamatorias y remodelación de la matriz extracelular.',
  },
  'tb500-10mg': {
    descriptionEs: 'Timosina Beta-4 — Migración celular y cicatrización',
    shortDescEs: 'Versión sintética de la Timosina Beta-4, péptido regenerativo de 43 aminoácidos presente en prácticamente todas las células humanas.',
    detailsEs: 'El TB-500 es la versión sintética de la Timosina Beta-4 (TB4). Mecanismo de acción: upregulación de la polimerización de actina, promoción de la migración de células endoteliales, reducción de citoquinas proinflamatorias y estimulación de la diferenciación de células madre. Frecuentemente combinado con BPC-157 para protocolos de reparación tisular integral.',
  },
  'wolverine-blend-10mg': {
    descriptionEs: 'BPC-157 5mg + TB-500 5mg — Reparación sinérgica',
    shortDescEs: 'Mezcla predosificada de BPC-157 y TB-500 para investigación integral de regeneración tisular.',
    detailsEs: 'La Mezcla Wolverine combina BPC-157 y TB-500 en un único vial para investigación regenerativa sinérgica. Ambos péptidos actúan mediante mecanismos complementarios para favorecer la reparación tisular, la angiogénesis y la migración celular.',
  },
  'wolverine-blend-20mg': {
    descriptionEs: 'BPC-157 10mg + TB-500 10mg — Reparación potenciada',
    shortDescEs: 'Mezcla de doble concentración para protocolos avanzados de investigación regenerativa.',
    detailsEs: 'Mezcla Wolverine de concentración aumentada con el doble de BPC-157 y TB-500. Idónea para protocolos de investigación extendidos que requieren dosificación superior.',
  },
  'glow-blend-70mg': {
    descriptionEs: 'BPC-157 + TB-500 + GHK-Cu — Triple regeneración',
    shortDescEs: 'Mezcla triple avanzada que combina compuestos de investigación regenerativa y estética.',
    detailsEs: 'La Mezcla GLOW combina tres péptidos de investigación de alta potencia: BPC-157 para reparación tisular, TB-500 para migración celular, y GHK-Cu para rejuvenecimiento cutáneo y síntesis de colágeno.',
  },
  'klow-blend-80mg': {
    descriptionEs: 'BPC-157 + TB-500 + KPV + GHK-Cu — Recuperación máxima',
    shortDescEs: 'Mezcla cuádruple de péptidos para investigación integral en recuperación y modulación antiinflamatoria.',
    detailsEs: 'La Mezcla KLOW es nuestra formulación regenerativa más avanzada, combinando BPC-157, TB-500, KPV (tripéptido antiinflamatorio) y GHK-Cu para investigación integral de reparación tisular y respuesta antiinflamatoria.',
  },
  'semax-10mg': {
    descriptionEs: 'Péptido Nootrópico — Potenciación cognitiva',
    shortDescEs: 'Heptapéptido sintético derivado del fragmento 4-10 de ACTH. Desarrollado en Rusia para investigación de la función cognitiva.',
    detailsEs: 'El Semax es un heptapéptido sintético (Met-Glu-His-Phe-Pro-Gly-Pro) derivado del fragmento 4-10 de la hormona adrenocorticótropa (ACTH). Mecanismos: incrementa la expresión de BDNF y NGF, modula la degradación de encefalinas, y potencia el metabolismo de serotonina y dopamina en el sistema nervioso central.',
  },
  'selank-10mg': {
    descriptionEs: 'Nootrópico Ansiolítico — Respuesta al estrés y cognición',
    shortDescEs: 'Heptapéptido sintético con propiedades ansiolíticas y nootrópicas para investigación de la respuesta al estrés.',
    detailsEs: 'El Selank es un heptapéptido sintético de desarrollo ruso. Los estudios demuestran efectos ansiolíticos sin sedación, potenciación de la función cognitiva y modulación de la expresión de interleucina-6, con un perfil de seguridad favorable.',
  },
  'semax-selank-blend': {
    descriptionEs: 'Sinergia Cognitiva y Ansiolítica',
    shortDescEs: 'Mezcla nootrópica combinada para investigación integral de función cognitiva y regulación emocional.',
    detailsEs: 'La Mezcla Semax + Selank combina dos potentes péptidos nootrópicos de desarrollo ruso. El Semax proporciona potenciación cognitiva mediante modulación de BDNF/NGF, mientras que el Selank aporta efectos ansiolíticos y resiliencia frente al estrés mediante vías complementarias.',
  },
  'cjc1295-5mg': {
    descriptionEs: 'Análogo de GHRH — Liberación pulsátil de GH',
    shortDescEs: 'Análogo de 29 aminoácidos de la GHRH. Produce pulsos cortos y naturales de GH sin efecto de "GH bleed" (sangrado de GH).',
    detailsEs: 'El CJC-1295 sin DAC (también conocido como Mod GRF 1-29) es un análogo de 29 aminoácidos de la hormona liberadora de la hormona de crecimiento (GHRH). A diferencia del CJC-1295 con DAC, produce pulsos discretos de GH que mimetizan la fisiología endógena. Se emplea preferentemente en combinación con un GHRP como Ipamorelin para mayor eficacia.',
  },
  'ipamorelin-10mg': {
    descriptionEs: 'Secretagogo Selectivo de GH — Liberación limpia de GH',
    shortDescEs: 'Secretagogo de GH pentapeptídico que estimula selectivamente la liberación hipofisaria de GH sin elevar cortisol ni prolactina.',
    detailsEs: 'El Ipamorelin es un secretagogo pentapeptídico de la hormona de crecimiento que estimula selectivamente la hipófisis para liberar GH. A diferencia de otros GHRPs, no incrementa significativamente cortisol, prolactina ni aldosterona, lo que lo convierte en el GHRP "más limpio" para investigación.',
  },
  'hgh-10iu': {
    descriptionEs: 'Hormona de Crecimiento Humana Recombinante',
    shortDescEs: 'Polipéptido de 191 aminoácidos idéntico a la GH hipofisaria natural. Esencial para investigación en crecimiento y regeneración celular.',
    detailsEs: 'La Hormona de Crecimiento Humana (Somatropina) es un polipéptido de 191 aminoácidos producido por la hipófisis anterior. La HGH recombinante es estructuralmente idéntica a la GH hipofisaria natural. Áreas de investigación: deficiencia de GH, composición corporal, optimización de la recuperación y metabolismo.',
  },
  'tesamorelin-10mg': {
    descriptionEs: 'Análogo de GHRH — Investigación dirigida de GH',
    shortDescEs: 'Análogo sintético de la GHRH con estabilidad y potencia mejoradas para investigación de la hormona de crecimiento.',
    detailsEs: 'La tesamorelina es un análogo sintético de la hormona liberadora de la hormona de crecimiento (GHRH) con estabilidad mejorada. Aprobada por la FDA para lipodistrofia asociada al VIH. La investigación se centra en la reducción de tejido adiposo visceral y elevación de IGF-1.',
  },
  'sermorelin-10mg': {
    descriptionEs: 'Análogo de GHRH — Estimulación natural de GH',
    shortDescEs: 'Fragmento de 29 aminoácidos de la GHRH que estimula la producción natural de GH por la hipófisis.',
    detailsEs: 'La sermorelina es un fragmento de 29 aminoácidos de la GHRH que estimula la hipófisis para producir hormona de crecimiento natural. La investigación abarca anti-envejecimiento, composición corporal y mejora de la calidad del sueño.',
  },
  'hcg-5000iu': {
    descriptionEs: 'Gonadotropina Coriónica Humana — Investigación hormonal',
    shortDescEs: 'Hormona glucoproteíca para investigación en endocrinología reproductiva y equilibrio hormonal.',
    detailsEs: 'La gonadotropina coriónica humana (HCG) es una hormona glucoproteíca utilizada en investigación de endocrinología reproductiva, producción de testosterona y estudios metabólicos.',
  },
  'gonadorelin-10mg': {
    descriptionEs: 'Agonista de GnRH — Investigación hormonal reproductiva',
    shortDescEs: 'Decapéptido sintético de GnRH para investigación en regulación de hormonas reproductivas.',
    detailsEs: 'La gonadorelina es un decapéptido sintético idéntico a la GnRH natural. La investigación se centra en endocrinología reproductiva, estudios de fertilidad y regulación del eje hormonal hipotálamo-hipófisis-gonadal.',
  },
  'kisspeptin-10mg': {
    descriptionEs: 'Neuropéptido Reproductivo — Investigación del eje HPG',
    shortDescEs: 'Decapéptido regulador del eje hipotálamo-hipófisis-gonadal para investigación reproductiva.',
    detailsEs: 'La KissPeptina-10 es un decapéptido con función crítica en la regulación del eje hipotálamo-hipófisis-gonadal (HPG). La investigación se enfoca en biología reproductiva, inicio de la pubertad y fertilidad.',
  },
  'igf1-lr3-1mg': {
    descriptionEs: 'Factor de Crecimiento Insulínico — Investigación anabólica',
    shortDescEs: 'Análogo de acción prolongada del IGF-1 con vida media extendida para investigación en crecimiento y recuperación.',
    detailsEs: 'El IGF-1 LR3 es un análogo del factor de crecimiento insulínico tipo 1 con vida media prolongada. La investigación se centra en crecimiento muscular, recuperación tisular y optimización metabólica.',
  },
  'ace031-1mg': {
    descriptionEs: 'Inhibidor de Miostatina — Investigación muscular',
    shortDescEs: 'Receptor de activina tipo IIB soluble para investigación en inhibición de miostatina y crecimiento muscular.',
    detailsEs: 'El ACE-031 es un receptor de activina tipo IIB soluble que inhibe la miostatina y proteínas relacionadas. La investigación se centra en crecimiento muscular, distrofia muscular de Duchenne y caquexia.',
  },
  'aicar-50mg': {
    descriptionEs: 'Activador de AMPK — Investigación metabólica y de resistencia',
    shortDescEs: 'Activador de AMPK permeable a células para investigación en regulación metabólica y resistencia física.',
    detailsEs: 'El AICAR (Acadesina) es un activador de AMPK permeable a células. La investigación se centra en regulación metabólica, potenciación de la resistencia y homeostasis energética celular.',
  },
  'adipotide-10mg': {
    descriptionEs: 'Péptido Proapoptótico — Investigación en tejido adiposo',
    shortDescEs: 'Péptido proapoptótico experimental para investigación en reducción selectiva de tejido adiposo.',
    detailsEs: 'El Adipotide es un péptido proapoptótico experimental que actúa sobre el suministro vascular del tejido adiposo. La investigación se centra en intervenciones en obesidad y reducción localizada de grasa.',
  },
  'melanotan2-10mg': {
    descriptionEs: 'Agonista Melanocortínico — Investigación en pigmentación',
    shortDescEs: 'Análogo sintético de melanocortina para investigación en pigmentación cutánea y melanogénesis.',
    detailsEs: 'La Melanotana II es un análogo sintético de melanocortina que estimula la melanogénesis. La investigación abarca pigmentación cutánea, fotoprotección y disfunción sexual.',
  },
  'mt1-10mg': {
    descriptionEs: 'Agonista Melanocortínico — Investigación en melanogénesis',
    shortDescEs: 'Análogo sintético de α-MSH para investigación en melanogénesis y pigmentación cutánea.',
    detailsEs: 'La MT-1 (Melanotana I) es un análogo sintético de la hormona estimulante de melanocitos alfa. La investigación abarca melanogénesis, fotoprotección y trastornos de la pigmentación.',
  },
  'mots-c-40mg': {
    descriptionEs: 'Péptido Mitocondrial — Metabolismo y longevidad',
    shortDescEs: 'Péptido mitocondrial de 16 aminoácidos para investigación en regulación metabólica y longevidad.',
    detailsEs: 'El MOTS-c es un péptido de 16 aminoácidos derivado de las mitocondrias. La investigación se centra en regulación metabólica, sensibilidad insulínica, rendimiento físico y longevidad.',
  },
  'ghk-cu-50mg': {
    descriptionEs: 'Péptido de Cobre — Rejuvenecimiento y reparación cutánea',
    shortDescEs: 'Tripéptido (Gli-His-Lis) complejado con cobre(II). Regulador clave del remodelado tisular con más de 40 años de investigación.',
    detailsEs: 'El GHK-Cu es un tripéptido (glicil-L-histidil-L-lisina) complejado con cobre(II). Funciones: upregulación de ~4000 genes humanos implicados en procesos regenerativos, estimulación de la síntesis de colágeno y elastina, promoción de la cicatrización y marcada actividad antioxidante.',
  },
  'ghk-cu-100mg': {
    descriptionEs: 'Péptido de Cobre — Concentración mejorada',
    shortDescEs: 'GHK-Cu de doble concentración para investigación avanzada en rejuvenecimiento cutáneo y reparación tisular.',
    detailsEs: 'Formulación de alta concentración de GHK-Cu para protocolos de investigación avanzados. Mismos estándares de pureza y calidad que nuestra formulación de 50 mg, con el doble de contenido peptídico por vial.',
  },
  'ahk-cu-50mg': {
    descriptionEs: 'Péptido de Cobre — Investigación del crecimiento capilar',
    shortDescEs: 'Complejo de cobre tripeptídico estudiado específicamente para estimulación folicular y crecimiento del cabello.',
    detailsEs: 'El AHK-Cu es un complejo de cobre tripeptídico (Ala-His-Lis + Cu) investigado específicamente para el crecimiento capilar y la estimulación folicular. Muestra resultados prometedores en investigación de alopecia androgénica.',
  },
  'epithalon-10mg': {
    descriptionEs: 'Activador de Telomerasa — Investigación en longevidad',
    shortDescEs: 'Tetrapéptido (Ala-Glu-Asp-Gli) con potentes propiedades de activación de la telomerasa. Desarrollado por el Prof. Khavinson.',
    detailsEs: 'El Epithalon (Epitalón, Ala-Glu-Asp-Gli) es un tetrapéptido con propiedades de activación de la telomerasa. Mecanismo: activa la enzima telomerasa, que elongá los telómeros. Más de 20 años de investigación clínica en Rusia con un perfil de seguridad bien documentado.',
  },
  'nad-plus-500mg': {
    descriptionEs: 'Coenzima de Energía Celular — Activación de sirtuinas',
    shortDescEs: 'Coenzima esencial para el metabolismo energético, reparación del ADN y señalización celular. Sus niveles disminuyen ~50% a los 50 años.',
    detailsEs: 'El NAD+ (Dinucleótido de Nicotinamida y Adenina) es una coenzima esencial presente en todas las células vivas. Crítico para el metabolismo energético (producción de ATP), reparación del ADN (enzimas PARP) y activación de sirtuinas (SIRT1-SIRT7). Los niveles de NAD+ disminuyen aproximadamente un 50% entre los 20 y los 50 años.',
  },
  'nad-plus-1000mg': {
    descriptionEs: 'NAD+ de Alta Potencia — Investigación celular avanzada',
    shortDescEs: 'NAD+ de doble concentración para protocolos avanzados de investigación en energía celular y longevidad.',
    detailsEs: 'Formulación de alta potencia de NAD+ para protocolos de investigación avanzados. Mismos estándares de pureza con el doble de contenido de coenzima por vial.',
  },
  'foxo4-dri-10mg': {
    descriptionEs: 'Péptido Senolítico — Investigación en senescencia celular',
    shortDescEs: 'Péptido FOXO4 modificado que induce apoptosis selectiva en células senescentes para investigación en longevidad.',
    detailsEs: 'El FOXO4-DRI es un péptido FOXO4 modificado que interfiere con la interacción p53-FOXO4 en células senescentes, induciendo apoptosis dirigida. La investigación se centra en terapia senolítica y longevidad celular.',
  },
  'snap8-10mg': {
    descriptionEs: 'Octapéptido Acetilado — Investigación en líneas de expresión',
    shortDescEs: 'Octapéptido acetilado para investigación en la modulación de la contracción muscular y la formación de líneas de expresión.',
    detailsEs: 'El SNAP-8 es un octapéptido acetilado que imita el extremo N-terminal de la proteína SNAP-25. La investigación se centra en la modulación de la contracción muscular y posibles aplicaciones en la atenuación de líneas de expresión.',
  },
  'glutathione-1500mg': {
    descriptionEs: 'Antioxidante Maestro — Investigación en detoxificación',
    shortDescEs: 'Antioxidante tripeptídico (Glu-Cis-Gli) esencial para la detoxificación celular y la función inmunológica.',
    detailsEs: 'El glutatión es un tripéptido (glutamato-cisteína-glicina) conocido como el antioxidante maestro del organismo. La investigación abarca detoxificación celular, función inmunológica, aclaramiento cutáneo y reducción del estrés oxidativo.',
  },
  'pt141-10mg': {
    descriptionEs: 'Agonista Melanocortínico — Investigación en salud sexual',
    shortDescEs: 'Análogo sintético de melanocortina para investigación en disfunción sexual y mecanismos de excitación.',
    detailsEs: 'El PT-141 (Bremelanotida) es un análogo sintético de melanocortina que activa receptores melanocortínicos. La investigación abarca disfunción sexual, mecanismos de excitación y vías neurológicas relacionadas.',
  },
  'thymosin-a1-10mg': {
    descriptionEs: 'Inmunomodulador — Investigación en inmunología',
    shortDescEs: 'Péptido de 28 aminoácidos para investigación en modulación del sistema inmunitario y función linfocitaria T.',
    detailsEs: 'La Timosina α-1 es un péptido de 28 aminoácidos derivado de la protimosina alfa. La investigación se centra en modulación inmunológica, diferenciación de linfocitos T y mecanismos de defensa antiviral.',
  },
  'dsip-10mg': {
    descriptionEs: 'Péptido Delta del Sueño — Investigación del sueño',
    shortDescEs: 'Nonapéptido para investigación en arquitectura del sueño, respuesta al estrés y regulación endocrina.',
    detailsEs: 'El DSIP (Delta Sleep-Inducing Peptide) es un nonapéptido que modula la arquitectura del sueño y la respuesta al estrés. La investigación abarca calidad del sueño, regulación del cortisol y equilibrio endocrino.',
  },
  'vip-10mg': {
    descriptionEs: 'Péptido Intestinal Vasoactivo — Neuroinmunología',
    shortDescEs: 'Neuropéptido de 28 aminoácidos para investigación en neuroinmunología y función vascular.',
    detailsEs: 'El VIP (Péptido Intestinal Vasoactivo) es un neuropéptido de 28 aminoácidos. La investigación abarca neuroinmunología, función vascular, regulación de la inflamación y el eje intestino-cerebro.',
  },
  'kpv-10mg': {
    descriptionEs: 'Tripéptido Antiinflamatorio — Investigación inmunológica',
    shortDescEs: 'Tripéptido (Lis-Pro-Val) derivado de α-MSH con potentes propiedades antiinflamatorias.',
    detailsEs: 'El KPV (Lis-Pro-Val) es un tripéptido derivado de la hormona estimulante de melanocitos alfa. La investigación se centra en mecanismos antiinflamatorios, modulación inmunológica y salud intestinal.',
  },
  'lipo-c': {
    descriptionEs: 'Compuesto Lipotrópico — Investigación del metabolismo graso',
    shortDescEs: 'Compuesto lipotrópico para investigación en metabolismo lipídico y función hepática.',
    detailsEs: 'El Lipo-C es un compuesto lipotrópico investigado por sus efectos sobre el metabolismo lipídico, la función hepática y la producción de energía.',
  },
  'lipo-b': {
    descriptionEs: 'Mezcla Lipotrópica — Soporte metabólico',
    shortDescEs: 'Mezcla lipotrópica que combina vitaminas B y aminoácidos para investigación metabólica.',
    detailsEs: 'El Lipo-B es una mezcla lipotrópica que contiene vitaminas del complejo B y aminoácidos, investigada para soporte metabólico y metabolismo lipídico.',
  },
  'lipo-focus': {
    descriptionEs: 'Lipotrópico Específico — Investigación enfocada',
    shortDescEs: 'Formulación lipotrópica dirigida para aplicaciones específicas de investigación metabólica.',
    detailsEs: 'El Lipo Focus es una formulación lipotrópica dirigida para aplicaciones específicas de investigación metabólica y composición corporal.',
  },
  'fat-blaster': {
    descriptionEs: 'Lipotrópico Avanzado — Investigación metabólica intensa',
    shortDescEs: 'Compuesto lipotrópico avanzado para investigación intensiva en metabolismo lipídico.',
    detailsEs: 'El Fat Blaster es un compuesto lipotrópico avanzado para investigación intensiva en metabolismo lipídico y producción de energía.',
  },
  'super-shred': {
    descriptionEs: 'Lipotrópico Premium — Máximo potencial metabólico',
    shortDescEs: 'Formulación lipotrópica premium para máximo potencial en investigación metabólica.',
    detailsEs: 'El Super Shred es una formulación lipotrópica premium que combina múltiples compuestos de soporte metabólico para investigación avanzada.',
  },
  'cjc-ipamorelin-10mg': {
    descriptionEs: 'Protocolo de Liberación Sinérgica de GH',
    shortDescEs: 'Mezcla predosificada de CJC-1295 (5mg) e Ipamorelin (5mg) para investigación optimizada de GH.',
    detailsEs: 'La Mezcla CJC-1295 / Ipamorelin combina un análogo de GHRH con un secretagogo selectivo de GH. El CJC-1295 proporciona la señal para la liberación de GH, mientras que el Ipamorelin amplifica la respuesta hipofisaria. El efecto sinérgico supera al de cada péptido administrado de forma aislada.',
  },
  'relaxation-pm': {
    descriptionEs: 'GABA + Melatonina + Arginina + Glutamina',
    shortDescEs: 'Mezcla vespertina para investigación en sueño y recuperación. Formulación de 226 mg/mL.',
    detailsEs: 'La Mezcla Relaxation PM combina GABA, melatonina, arginina y glutamina en una única formulación para investigación en calidad del sueño y recuperación. Cada componente actúa sinérgicamente para favorecer la relajación y los procesos restaurativos nocturnos.',
  },
  'bacteriostatic-water': {
    descriptionEs: 'Solución Estéril de Reconstitución',
    shortDescEs: 'Agua estéril de 30 mL con 0,9% de alcohol bencílico para reconstitución de péptidos.',
    detailsEs: 'El agua bacteriostática es agua estéril que contiene 0,9% de alcohol bencílico como conservante bacteriostático. Utilizada para reconstituir péptidos liofilizados, permite la preservación del producto reconstituido.',
  },
  'acetic-acid': {
    descriptionEs: 'Agente de Solubilización de Péptidos',
    shortDescEs: 'Ácido acético diluido para solubilización de péptidos hidrofóbicos.',
    detailsEs: 'Solución de ácido acético diluido para solubilizar péptidos hidrofóbicos que no se disuelven fácilmente en agua bacteriostática. Grado ACS.',
  },
  'wfi-water': {
    descriptionEs: 'Agua para Inyección — Grado USP',
    shortDescEs: 'Agua estéril para inyección, grado USP, para reconstitución de péptidos.',
    detailsEs: 'El Agua para Inyección (WFI) es agua estéril que cumple las normas USP. Adecuada para reconstitución de péptidos de uso único.',
  },
  'insulin-syringes': {
    descriptionEs: 'Jeringas de Investigación Premium',
    shortDescEs: 'Jeringas de insulina de calibre 31, 5/16" (8 mm) para aplicaciones de investigación.',
    detailsEs: 'Jeringas de insulina premium de calibre 31 G y 5/16" para aplicaciones de investigación. Estériles, de uso único y envasadas individualmente.',
  },
};

export function getProductLocalized(product: Product, lang: 'en' | 'es'): Product {
  if (lang === 'es') {
    const t = pt[product.id];
    if (t) {
      return {
        ...product,
        description: t.descriptionEs,
        shortDesc: t.shortDescEs,
        details: t.detailsEs,
      };
    }
  }
  return product;
}

export const categoryLabelEs: Record<string, string> = {
  'GLP-1 / Metabolic': 'GLP-1 / Metabólico',
  'Regenerative': 'Regenerativo',
  'Nootropic': 'Nootrópico',
  'Hormonal / Performance': 'Hormonal / Rendimiento',
  'Aesthetic / Wellness': 'Estético / Bienestar',
  'Blends': 'Combinaciones',
  'Supplies': 'Suministros',
};
