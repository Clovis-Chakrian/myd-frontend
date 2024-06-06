import React, { useState } from "react";
import styles from "./Config.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import { Tags } from "../../components/Tags/Tags";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const ConfigCards = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const performance = [
    { title: "Meditação", progress: 75, id: 1 },
    { title: "Técnica de respiração.", progress: 26, id: 2 },
    { title: "Relaxamento", progress: 5, id: 3 },
  ];

  const ofensiva = [
    { title: "Seg", id: 1, ofensiva: true, desafios: 2, color: "#72EB70" },
    { title: "Ter", id: 2, ofensiva: true, desafios: 5, color: "#F2B66D" },
    { title: "Quart", id: 3, ofensiva: true, desafios: 1, color: "#E01754" },
    { title: "Quin", id: 4, ofensiva: false, desafios: 0, color: "#E01754" },
    { title: "Dom", id: 7, ofensiva: false, desafios: 0, color: "#E01754" },
  ];

  return (
    <div className={styles.divCol}>
      <div className={styles.uploadImg}>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{
              display: "none",
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
      </div>

      <div className={styles.greeting}>
        <h1>Olá, Anna!</h1>
        <span>
          Você realizou {ofensiva.filter((e) => e.ofensiva).length} desafios
          hoje!
        </span>
      </div>

      <div className={styles.points}>
        <h1>Total de pontos: 6 pts</h1>
        <span>Você está realizando desafios a 3 dias.</span>
      </div>

      <div className={styles.report}>
        <h2>Relatório Semanal</h2>
      </div>

      <div className={styles.ofensiva}>
        {ofensiva.map((e) => (
          <Tags
            key={e.id}
            title={e.title}
            numero={e.desafios}
            cor={e.color}
            desafios={e.desafios}
          />
        ))}
      </div>
      <div className={styles.buttonDiv}>
        <Link to="/home">
          <Button name={"Explorar"} className={styles.button} />
        </Link>
      </div>
    </div>
  );
};
