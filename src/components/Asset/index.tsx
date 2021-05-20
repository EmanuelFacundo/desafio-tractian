import { propsAssets } from "./types";

import "./style.scss"

export default function Asset(props: propsAssets) {
  const asset = props.asset

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
        </div>
      </div>
    </div>
  )
}