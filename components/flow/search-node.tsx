import { memo } from 'react'
import { Handle, Position } from '@xyflow/react'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Loader2, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SUPPORTED_FILE_TYPES } from '@/lib/file-upload'

type SearchNodeData = {
  query: string
  loading: boolean
  onFileUpload?: (file: File) => void
}

export const SearchNode = memo(function SearchNode({
  data,
}: {
  data: SearchNodeData
}) {
  return (
    <div className='w-[400px]'>
      <Card>
        <CardContent className='p-4'>
          <div className='flex items-center justify-between gap-3'>
            {/* Icon and Query Section */}
            <div className='flex items-start gap-3 flex-1 min-w-0'>
              <div className='p-2 rounded-full bg-blue-50'>
                {data.loading ? (
                  <Loader2 className='h-4 w-4 animate-spin text-blue-500' />
                ) : (
                  <Search className='h-4 w-4 text-blue-500' />
                )}
              </div>
              <div className='flex-1 min-w-0'>
                <h3 className='font-medium text-sm text-gray-900'>
                  Search Query
                </h3>
                <p className='text-sm text-gray-600 truncate'>{data.query}</p>
              </div>
            </div>

            {/* Upload Button */}
            {data.onFileUpload && (
              <div className='relative flex-shrink-0'>
                <Input
                  type='file'
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file && data.onFileUpload) {
                      data.onFileUpload(file)
                      e.target.value = ''
                    }
                  }}
                  className='absolute inset-0 opacity-0 cursor-pointer'
                  accept={SUPPORTED_FILE_TYPES}
                />
                <Button
                  type='button'
                  variant='outline'
                  size='sm'
                  className='pointer-events-none'
                >
                  <Upload className='h-4 w-4 mr-2' />
                  Upload
                </Button>
              </div>
            )}
          </div>
        </CardContent>

        <Handle
          type='source'
          position={Position.Bottom}
          className='!bg-blue-500'
        />
      </Card>
    </div>
  )
})
