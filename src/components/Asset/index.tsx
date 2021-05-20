import { format, parseISO } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { propsAssets } from "./types"

import "./style.scss"

export default function Asset(props: propsAssets) {
  const asset = props.asset
  const totalUpTime = props.asset.metrics.totalUptime.toFixed(2)
  const regex = /[0-9-T:]+/
  const data = props.asset.metrics.lastUptimeAt.match(regex)?.[0]
  var newData = data !== undefined ? data : ""
  newData = newData.replace(/[T]/, " ")

  function status() {
    if (asset.status === "inAlert") {
      return "Em Alerta"
    } else if (asset.status === "inDowntime") {
      return "Em Parada"
    } else {
      return "Em Operação"
    }
  }

  function renderSensors() {
    return asset.sensors.map((sensor, index) => {
      return (
        <b key={index}>
          {sensor}
        </b>
      )
    })
  }

  return (
    <div className="asset">
      {props.unity && props.company ?
        <>
          <h2>{props.company.name}</h2>
          <h3>{props.unity.name}</h3>
        </> : ""}

      <div className="informations">
        <div className="text">
          <p>Ativo: <b>{asset.name}</b> </p>
          <p>Modelo: <b>{asset.model}</b> </p>
          <p>Status: <b className={asset.status}>{status()}</b> </p>
          <p>Sensor: {renderSensors()} </p>
        </div>
        <div className="visual">
          <img src={asset.image} alt="Ativo" />
          <div className="spec">
              <div>
                <h4>Especificações</h4>
                <div>
                  <p>Saúde em {props.asset.healthscore}%</p>
                  <p>Temperatura Máxima: {props.asset.specifications.maxTemp}°c</p>
                  {props.asset.specifications.power ?
                    <p>Potência: {props.asset.specifications.power}kWh</p> : ''}
                  {props.asset.specifications.rpm ?
                    <p>Rpm: {props.asset.specifications.rpm}rpm</p> : ''}
                </div>
              </div>
              <div>
                <h4>Coletas</h4>
                <div>
                  <p>Total de Coletas: {props.asset.metrics.totalCollectsUptime}</p>
                  <p>Total de Horas de Coletas: {totalUpTime}</p>
                  <p>Data da Ultima Coleta: {format(parseISO(newData),
                    'd/MM/yyyy', { locale: ptBR })} às {format(parseISO(newData),
                      'H:m:s', { locale: ptBR })}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}