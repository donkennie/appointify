import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors} = useContext(AppContext)

  const [docInfo, setDocInfo] = useState()

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  return docInfo && (
    <div>
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Appointment