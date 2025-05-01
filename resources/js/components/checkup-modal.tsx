
"use client";

import { router } from "@inertiajs/react";
import { Button, Label, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";

export function CheckupModal({doctors}) {
    const [openModal, setOpenModal] = useState(false);
    const [doctor, setDoctor] = useState(doctors[0].id);
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");

    console.log(doctor, date, note);

    function onSubmit() {
        // Handle form submission
        console.log("Form submitted with data:", { doctor, date, note });
        router.post("/make-an-appointment", {
            doctor_id: doctor,
            checkup_date: date,
            note: note,
        });
        setOpenModal(false);
    }

    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <>
            <Button className="bg-cyan-600 text-white py-2 px-4 rounded" onClick={() => setOpenModal(true)}>Buat janji</Button>
            <Modal className="bg-black/50" show={openModal} size="md" onClose={onCloseModal} popup>
                <ModalHeader className="bg-gray-200 dark:bg-gray-700 rounded" />
                <ModalBody className="bg-black dark:bg-gray-800 rounded">
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Masukkan data yang diperlukan</h3>
                        <div>
                            <div className="mb-2 block">

                            <Label>Pilih dokter</Label>
                            </div>
                            <select className="py-1 px-2 w-full bg-gray-700 rounded" value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
                                {
                                    doctors.map((doctor) => (
                                        <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label>Masukkan tanggal</Label>
                            </div>
                            <div className="py-1 px-2 w-full bg-gray-700 rounded">
                                <input type="datetime-local" className="w-full" onChange={(e) => setDate(e.target.value)} value={date}/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label>Catatan</Label>
                            </div>
                            <div className="py-1 px-2 w-full bg-gray-700 rounded">
                                <input type="text" className="w-full" onChange={(e) => setNote(e.target.value)} value={note}/>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <Button className="bg-cyan-600 text-white py-2 px-4 rounded" onClick={onSubmit}>Daftar</Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}

