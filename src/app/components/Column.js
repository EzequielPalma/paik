const Column = ({ position }) => (
    <>
        <a-assets>
            <a-asset-item id="column-obj" src="images/column/column.obj"></a-asset-item>
        </a-assets>

        <a-entity
            id="column"
            material="src: images/column/column.jpg"
            position={position}
            rotation="270 45 0"
            obj-model="obj: #column-obj"
            scale="0.15 0.15 0.15">
        </a-entity>
    </>
);

export default Column;
