import { useDropzone } from 'react-dropzone'

type FormFileValue = {
  filename: string,
  type: string,
  size: number
  dataUrl: string | ArrayBuffer | null
  preview: string
}

interface FileInputProps {
  handleChangeFile: (file: FormFileValue, identifier: string) => void,
  identifier: string
}

export default ({ handleChangeFile, identifier }: FileInputProps) => {
  const { getRootProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png']
    },
    onDrop: acceptedFiles => {
      acceptedFiles.map(file => {
        const reader = new FileReader()
        reader.onabort = () => alert('file reading was aborted')
        reader.onerror = () => alert('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
          handleChangeFile({  
            filename: file.name,
            size: file.size,
            type: file.type,
            dataUrl: binaryStr,
            preview: URL.createObjectURL(file)
          }, identifier)
        }
        reader.readAsDataURL(file)
      });
    }
  });

  return (
    <div {...getRootProps({className: 'dropzone'})}>
      <label htmlFor="avatar" className="relative cursor-pointer flex flex-row text-[#9333EA] rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2">
        <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#3B82F6]'>Selecione um arquivo ou arraste e solte</span>
      </label>
    </div>
  )
}