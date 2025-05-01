import { router } from '@inertiajs/react';
import { Button, Label, Modal, ModalBody, ModalHeader } from 'flowbite-react'
import React, { useState } from 'react'

const CheckupDoneModal = ({ medicines, checkupId }) => {
    const [openModal, setOpenModal] = useState(false);
    const [note, setNote] = useState("");
    const [medicinesForPatient, setMedicinesForPatient] = useState([]);

    console.log(medicinesForPatient);

    function onSubmit() {
        const price = medicinesForPatient.reduce((acc, medicine) => acc + medicine.price, 0);

        // Handle form submission
        console.log("Form submitted with data:", { note, medicinesForPatient });
        router.post("/done-checkup", {
            id: checkupId,
            note: note,
            price: price,
            medicines: medicinesForPatient.map((medicine) => medicine.id),
        });
        setOpenModal(false);
    }

    function onCloseModal() {
        setOpenModal(false);
    }
    return (
        <>
            <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800" onClick={() => setOpenModal(true)}>Selesai periksa</button>
            <Modal className="bg-black/50" show={openModal} size="md" onClose={onCloseModal} popup>
                <ModalHeader className="bg-gray-200 dark:bg-gray-700 rounded" />
                <ModalBody className="bg-black dark:bg-gray-800 rounded">
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">Masukkan data yang diperlukan</h3>
                        Nama Pasien : <span className="font-bold">John Doe</span>
                        <div>
                            <div className="mb-2 block">
                                <Label>Catatan</Label>
                            </div>

                            <textarea className="py-1 px-2 w-full bg-gray-700 rounded" onChange={(e) => setNote(e.target.value)} value={note} />

                        </div>
                        <div className="">
                            {
                                medicinesForPatient.length > 0 ? (
                                    <div className="flex flex-col gap-2">
                                        {
                                            medicinesForPatient.map((medicine) => (
                                                <div key={medicine.id} className="flex justify-between">
                                                    <p>{medicine.name} - {medicine.price}</p>
                                                    <button onClick={() => setMedicinesForPatient(medicinesForPatient.filter((m) => m.id !== medicine.id))} className="bg-red-600 text-white px-2 py-1 rounded">Hapus</button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <p className="text-gray-400 mt-2">Anda tidak memiliki obat saat ini.</p>
                                )
                            }
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label>pilih obat</Label>
                            </div>
                            <div className="py-1 px-2 w-full bg-gray-700 rounded h-32 overflow-y-scroll" >
                                {
                                    medicines.map((medicine) => (
                                        <button onClick={() => setMedicinesForPatient([...medicinesForPatient, medicine])} className="w-full" key={medicine.id}>
                                            {medicine.name} - {medicine.price}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <button className="bg-green-600 text-white py-2 px-4 rounded" onClick={onSubmit}>Selesai</button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default CheckupDoneModal
