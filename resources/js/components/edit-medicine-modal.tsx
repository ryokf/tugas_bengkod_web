"use client";

import { router } from "@inertiajs/react";
import { Button, Label, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";

const EditMedicineModal = ({ id, name, packaging, price }) => {
    const [openModal, setOpenModal] = useState(false);
    const [medicineName, setMedicineName] = useState(name);
    const [medicinePackaging, setMedicinePackaging] = useState(packaging);
    const [medicinePrice, setMedicinePrice] = useState(price);

    function onSubmit() {
        // Handle form submission
        console.log("Form submitted with data:", { medicineName, medicinePackaging, medicinePrice });
        router.put("/medicines", {
            id: id,
            name: medicineName,
            packaging: medicinePackaging,
            price: medicinePrice,
        });
        setOpenModal(false);
    }

    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <>
            <Button className="bg-cyan-600 text-white py-2 px-4 rounded" onClick={() => setOpenModal(true)}>Edit</Button>
            <Modal className="bg-black/50" show={openModal} size="md" onClose={onCloseModal} popup>
                <ModalHeader className="bg-gray-200 dark:bg-gray-700 rounded" />
                <ModalBody className="bg-black dark:bg-gray-800 rounded">
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Ubah Data Obat</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label>Nama Obat</Label>
                            </div>
                            <div className="py-1 px-2 w-full bg-gray-700 rounded">
                                <input type="text" className="w-full" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} />
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label>Kemasan</Label>
                            </div>
                            <div className="py-1 px-2 w-full bg-gray-700 rounded">
                                <input type="text" className="w-full" value={medicinePackaging} onChange={(e) => setMedicinePackaging(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label>Harga</Label>
                            </div>
                            <div className="py-1 px-2 w-full bg-gray-700 rounded">
                                <input type="text" className="w-full" value={medicinePrice} onChange={(e) => setMedicinePrice(e.target.value)} />
                            </div>
                        </div>

                        <div className="w-full flex justify-end">
                            <Button className="bg-cyan-600 text-white py-2 px-4 rounded" onClick={onSubmit}>Edit</Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}

export default EditMedicineModal
