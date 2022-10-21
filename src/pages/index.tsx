import type { NextPage } from 'next'
import { useCallback } from 'react'
import styles from './index.module.css'

const IPhone1313Pro1: NextPage = () => {
  const onRectangleRectangle1Click = useCallback(() => {
    window.open('https://wa.me/553899785207')
  }, [])

  const onRectangleRectangle2Click = useCallback(() => {
    window.open(
      'https://hotmart.com/pt-br/marketplace/produtos/eft-acupuntura-sem-agulhas/G47678043R'
    )
  }, [])

  return (
    <div className={styles.iPhone1313Pro1}>
      <div className={styles.headerDiv}>
        <div className={styles.rectangleDiv} />
        <b
          className={styles.carosAmigosAProssentenaC}
        >{`Caros amigos, a prossentença composta de invariantes lógicos justificaria a adoção das condições epistemológicas e cognitivas exigidas. `}</b>
        <div className={styles.transformaoDeVida}>Transformação de vida</div>
        <div className={styles.eFTComAnaLcia}>EFT com Ana Lúcia</div>
      </div>
      <div className={styles.scheduleDiv}>
        <b className={styles.consultaExeperimentalGrtis}>
          Consulta Exeperimental Grátis
        </b>
        <div
          className={styles.rectangleDiv1}
          onClick={onRectangleRectangle1Click}
        />
        <b className={styles.aGENDEAGORAB}>AGENDE AGORA</b>
      </div>
      <div className={styles.oqueDiv}>
        <b className={styles.oQueEFT}>O que é EFT</b>
        <div
          className={styles.aTcnicaDeLiberaoEmocion}
        >{`A Técnica de Liberação Emocional foi desenvolvida pelo engenheiro americano Gary Craig. Ele compreendeu que a causa de todas as emoções negativas, os traumas, é uma interrupção do fluxo de energia do nosso corpo. `}</div>
      </div>
      <div className={styles.tratamentoDiv}>
        <b className={styles.tratamentoB}>Tratamento</b>
        <div className={styles.aSessoDeEFTTrabalhaComA}>
          A sessão de EFT trabalha com a conexão mente-corpo, trazendo uma
          sequência de batidas leves com a ponta dos dedos, em certos pontos,
          utilizando também frases de liberação emocional
        </div>
      </div>
      <div className={styles.sessoOnlineDiv}>
        <b className={styles.sessoOnlineB}>Sessão Online</b>
        <div className={styles.aSessoDeEFTTrabalhaComA}>
          O atendimento online é tão eficiente quanto o atendimento presencial e
          oferece os mesmos benefícios tanto físico, emocional e energético para
          o paciente.
        </div>
      </div>
      <div className={styles.esteProdutoNoSubstituiOP}>
        *Este produto não substitui o parecer profissional. Sempre consulte um
        profissional da saúde*
      </div>
      <div className={styles.ebookDiv}>
        <b className={styles.saibaMaisComMeuEBOOK}>Saiba Mais Com Meu EBOOK</b>
        <div
          className={styles.rectangleDiv2}
          onClick={onRectangleRectangle2Click}
        />
        <b className={styles.mEUEBOOK}>MEU EBOOK</b>
      </div>
      <div className={styles.quemSouDiv}>
        <div className={styles.oAtendimentoOnlineToEfi1}>
          O atendimento online é tão eficiente quanto o atendimento presencial e
          oferece os mesmos benefícios tanto físico, emocional e energético para
          o paciente.
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-11@2x.png"
        />
        <b className={styles.quemSouEu}>Quem Sou Eu?</b>
      </div>
      <div className={styles.redeSociaisDiv}>
        <div className={styles.rectangleDiv3} />
        <div className={styles.meSigaNasRedesSociaisPra}>
          Me siga nas Redes Sociais pra eventos e novidades
        </div>
        <img className={styles.conesIcon} alt="" src="../cones.svg" />
        <b className={styles.redesSociaisB}>Redes Sociais</b>
      </div>
      <div className={styles.beneficiosDiv}>
        <b className={styles.benefcios}>Benefícios</b>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-27@2x.png"
        />
        <img
          className={styles.rectangleIcon2}
          alt=""
          src="../rectangle-27@2x.png"
        />
        <img
          className={styles.rectangleIcon3}
          alt=""
          src="../rectangle-27@2x.png"
        />
      </div>
      <div className={styles.aJUDANOAUTOCONHECIMENTO}>
        AJUDA NO AUTOCONHECIMENTO
      </div>
      <div className={styles.aJUDANOAUTOCONHECIMENTO1}>
        AJUDA NO AUTOCONHECIMENTO
      </div>
      <div className={styles.aJUDANOAUTOCONHECIMENTO2}>
        AJUDA NO AUTOCONHECIMENTO
      </div>
    </div>
  )
}

export default IPhone1313Pro1
