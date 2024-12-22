import React from "react"
import { Experiment } from "../api/types"
import { Container } from "./basic/Container"
import { ExperimentTitle } from "./ExperimentTitle"

type Props = Pick<
  Experiment,
  "id" | "title" | "startDate" | "endDate" | "state"
> & {
  responsiblePersonName?: string
  onClick?: () => void
}

export function ExperimentPreviewCard({
  onClick,
  title,
  startDate,
  endDate,
  state,
  responsiblePersonName,
}: Props) {
  return (
    <Container colorizeBackgroundColorOnHover onClick={onClick}>
      <ExperimentTitle title={title} headerLevel={3} />
      <ul>
        <li>Start date: {startDate}</li>
        <li>End date: {endDate}</li>
        <li>State: {state}</li>
        <li>Responsible person's name: {responsiblePersonName ?? "UNKNOWN"}</li>
      </ul>
    </Container>
  )
}
